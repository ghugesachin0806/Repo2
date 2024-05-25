import React ,{ useState } from 'react'
import { SnackbarProvider, useSnackbar } from 'notistack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Snackbar from '@material-ui/core/Snackbar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { blue } from '@material-ui/core/colors';
import EditIcon from '@mui/icons-material/Edit';



//to get users data

import { useSelector } from 'react-redux';
import { selectUser } from "../../../feature/userSlice";


// Edit username Modal class
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// Firebase Authentication
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



 



const Settings = ({posts,questions}) => {

  const user = useSelector(selectUser);
  console.log(user);

  const userQuestions = questions.filter((que) => que.user.uid === user.uid);

  const userQuestionCount = userQuestions.length;

  const userPosts = posts.filter((que) => que.user.uid === user.uid);

  const userPostsCount = userPosts.length;

  const userAnswerCount=0;




  // **************************Modal Class Functionality**************************
  const [open, setOpen] = React.useState(false);

  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





// Notifiaction object
// const { enqueueSnackbar } = useSnackbar();
// const handleClickVariant = () => {
//   // variant could be success, error, warning, info, or default
//   console.log('function callled for notification')
//   enqueueSnackbar('This is a success message!');
// };


// function MyNotify() {
//   const { enqueueSnackbar } = useSnackbar();

  

//   const handleClickVariant = (variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar('This is a success message!', { variant });
//   };

//   return (
//     <React.Fragment>
//       <Button variant="contained" onClick={()=>{handleClickVariant('success'); handleSave();}}>submit</Button>
//     </React.Fragment>
//   );
// }

const [openSnackbar, setOpenSnackbar] = React.useState(false);

const handleClickVariant = () => {
  setOpenSnackbar(true);
};

const handleCloseSnackbar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpenSnackbar(false);
};


  // **************************To set a new Name of a user************************
  const [name, setName] = useState(user.displayName ? user.displayName : user.email.split('@')[0]);

  const handleNameChange = (e) => setName(e.target.value);

  const handleSave = async() => {
    
    // console.log('Updated Name:', name);
    // handleClose(); // Close the modal after saving
    
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      
      console.log(name);
      console.log('Profile updated successfully!');
      // handleClickVariant('success');
      handleClose(); // Close the modal after saving
    } catch (error) {
      console.error('Error updating profile:', error.message);
      
      // Handle error updating profile
    }
  };









  return (

    
    <div>
    
    

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnackbar}
          autoHideDuration={6000} // Adjust as needed
          onClose={handleCloseSnackbar}
        >
          <Alert
            severity="success"
            icon={<CheckCircleIcon fontSize="inherit" />}
            // sx={{ backgroundColor: 'green' }}
          >
            <AlertTitle>Profile Updated</AlertTitle>
            
          </Alert>
        </Snackbar>

      {/* Noficatication Mechanism */}

        <Box sx={{
            height:0,
            marginLeft:110
        }}>
        <button onClick={handleOpen}><EditIcon/>edit profile</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Profile
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
              />

              <Button variant="contained" onClick={()=>{handleSave();handleClickVariant()}} >Save</Button>
              
                
            </Stack>
        </Box>
      </Modal>
        </Box>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          margin: 1,
          width: 200,
          height: 190,
          borderRadius:50
        },
      }}
    >
    
    
    <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="placeholder" />


     <Stack spacing={2} style={{marginTop : 40}}>
        
        <Typography variant="h6" gutterBottom>
            {/* Name : {user.displayName ? user.displayName : user.email.split('@')[0]} */}
            Name : {name}

        </Typography>

        <Typography variant="caption" display="block" gutterBottom>
            username: {user.email.split('@')[0]}
        </Typography>

         <Typography variant="caption" display="block" gutterBottom>
            email : {user.email}
        </Typography> 
        
      </Stack>
      
      
        
    </Box>
        
    <Box
      sx={{
        display: 'flex',
        marginLeft: 30,
       
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          margin: 5,
          
          
        },
      }}
    >
      
      <Paper elevation={3} sx={{textAlign:'center', backgroundColor:'#5682e8', color:'white'}}>
        {/* {userPostsCount} */}
        <Typography variant="h2" gutterBottom sx={{marginTop:0}}>
        {userPostsCount}
      </Typography>
      <Typography variant="h6" gutterBottom  sx={{marginTop:2}}>
      posts
      </Typography>
      </Paper>
      <Paper elevation={3} sx={{textAlign:'center', backgroundColor:'#5682e8', color:'white'}}>
        {/* {userQuestionCount} */}
        <Typography variant="h2" gutterBottom sx={{marginTop:0}}>
        {userQuestionCount}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginTop:2}}>
      Questions
      </Typography>
      </Paper>
      <Paper elevation={3} sx={{textAlign:'center', backgroundColor:'#5682e8', color:'white'}}>

        

      <Typography variant="h2" gutterBottom sx={{marginTop:0}}>
        {userAnswerCount}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{marginTop:2}}>
      Answers
      </Typography>
      </Paper>
      
    </Box>
    </div>
  )
}

export default Settings
