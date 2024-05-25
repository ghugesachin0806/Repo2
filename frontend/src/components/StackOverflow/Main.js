import React,{useEffect} from "react";


// Notification imports
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';

import FilterListIcon from "@material-ui/icons/FilterList";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";
// import axios from "axios";


// new component Added
import FilterTag from "./FilterTags/FilterTag";
import { useState } from "react";




function Main({ questions, searchInput, selectedTags }) {








  //******************************************* */ Notification Mechanism
 
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Set showNotification to true after the first render
    setShowNotification(true);
  }, []);

  const handleCloseSnackbar = () => {
    setShowNotification(false);
  };





  // const [questions, setQuestions] = useState([]);
  const [tag, setTag] = useState([]);

  const handleTagChange = (value) => {
    setTag(value);
    console.log("main-->",searchInput,selectedTags);
  };
  const filterQuestions = (question) => {
    // Parse the stringified JSON array back to an actual array
    const tagsArray = JSON.parse(question.tags);
    console.log("main-->",searchInput,selectedTags);
    // Add your filtering logic here based on searchInput and selectedTags
    // For example, you can use includes() to filter based on searchInput
    const matchSearch = question.title.toLowerCase().includes(searchInput.toLowerCase());

    // Check if selectedTags is defined and if the question has at least one of the selectedTags
    const matchTags = selectedTags && selectedTags.some(tag => tagsArray.includes(tag));

    // Return true only if either search or tag criteria are met
    return matchSearch || matchTags;
  };
  // console.log(questions);
  return (

    <>
    {/* <div>
    {showNotification && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={showNotification}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            severity="success"
            icon={<CheckCircleIcon fontSize="inherit" />}
          >
            <AlertTitle>Profile Updated</AlertTitle>
          </Alert>
        </Snackbar>
      )}
      
      
      
    </div> */}
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
          
          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div className="main-desc">
          <p>{questions.length} questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              {/* <div className="main-tab">
                
                <Link to="/">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/">Active</Link>

                
              </div>
              <div className="main-tab">
                
                <Link to="/">More</Link>
              </div> */}
            </div>
          
            <div className="main-filter-item">
              <FilterListIcon />
              Filter
              {/* <FilterTag onTagsChange={handleTagChange}/> */}
            </div>
          </div>
        </div>
        <div className="questions">
          {questions.filter(filterQuestions).map((_q) => (
            <div className="question">
              <AllQuestions data={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Main;
