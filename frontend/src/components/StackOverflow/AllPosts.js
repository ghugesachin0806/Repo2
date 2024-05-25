// import { Avatar } from "@material-ui/core";
// import React, { useState } from "react";
// import "./css/AllQuestions.css";
// import ReactHtmlParser from "react-html-parser";
// import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";




// New Imports For Change

import { Container } from '@mui/material'
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

// new 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import stack from '@mui/material/Stack';

// 12 March
import ReactHtmlParser from "react-html-parser";

import { useSelector } from 'react-redux';
// import { selectUser } from '../../redux/userSlice';
import { selectUser } from "../../feature/userSlice";

import { Link } from "react-router-dom";


function AllPosts({posts}) {

  // Old Code'
  // function truncate(str, n) {
  //   const charsToDisplay = Math.ceil(str.length * 0.2);
  // return str.length > charsToDisplay ? str.substr(0, charsToDisplay - 1) + "..." : str;
  // }
  // console.log(data);
  // let tags = JSON.parse(data?.tags[0]);
  // console.log();



// New Code
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// console.log(posts);

// To get the current user
const currentUser = useSelector(selectUser);
console.log(currentUser);
const [bt,setbt]=useState(0);

  return (
    <>
      {/* <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          {data.title}

         

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(data.body))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
          
          <div className="author">
            <small>{data.create_at}</small>
            <div className="auth-details">
              <Avatar {...stringAvatar(data?.user?.displayName)} />
              <p>
                {data?.user?.displayName
                  ? data?.user?.displayName
                  : data?.user?.email.split('@')[0]
                  ? data?.user?.email.split('@')[0]
                  : "Default Username"}

                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    {/* New Code */}

    
      {
        posts.map((post, index) => (
          <div key={index}>
                    <Accordion >
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      >
                      <Stack direction="row" spacing={2}>
                      <Typography>{post.title}</Typography>
                      <Typography variant="caption" display="block" gutterBottom>({post.created_at})</Typography>
                      </Stack>
                      
                      </AccordionSummary>
                      <AccordionDetails>
                          <>
                              <Container fixed>
                                          

                                      <Paper elevation={0}>
                                                  <Typography variant="h4" gutterBottom>
                                                  {post.title}
                                                  </Typography>
                                                  <div
                                                          style={{
                                                          display: "flex",
                                                          }}
                                                      >
                                                          {JSON.parse(post.tags[0]).map((_tag) => (
                                                      <p
                                                          style={{
                                                              margin: "10px 5px",
                                                              padding: "5px 10px",
                                                              backgroundColor: "#007cd446",
                                                              borderRadius: "3px",
                                                          }}
                                                      >
                                                          {_tag}
                                                      </p>
                                                  ))}
                                                  </div>
                                                  <Typography variant="H6" gutterBottom>
                                                  {ReactHtmlParser((post.body))}
                                                  </Typography>
                                          </Paper>
                                          <Paper elevation={1}>
                                                  
                                                  <Box sx={{ bgcolor: 'black', color:'green'}} >
                                                      

                                                      {ReactHtmlParser((post.code))}


                                                  </Box>
                                                  
                                          </Paper>
                                      
                                  </Container>
                          </>
                      
                      </AccordionDetails>
              </Accordion>
    
          </div>
      ))
      }
    </>
    
  );
}

export default AllPosts;
