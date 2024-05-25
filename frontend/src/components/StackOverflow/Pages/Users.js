import React from 'react'


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


const Users = ({questions}) => {

  const uniqueUsers = [...new Set(questions.map(que => que.user.email))];
  console.log(uniqueUsers);

  const u = questions.reduce((acc, que) => {
    if (!acc.some(user => user.uid === que.user.uid)) {
      acc.push(que.user);
    }
    return acc;
  }, []);

  console.log(u);
  return (
    <>
      <Container>

      <Typography variant="h4" gutterBottom sx={{color:''}}>
              Users 
      </Typography>
    <ul>
    {/* <Stack direction="row" spacing={10}> */}
    <Grid container spacing={2}>
       {uniqueUsers.map((user, index) => (
      
        // <Container maxWidth="sm">
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            

            <AccountCircleIcon color="primary" style={{ width: '100px', height: '100px', marginTop: 2,display: 'flex',flexDirection: 'column', alignItems:"center" }}/>
           
              {/* <li key={index}>{user}</li> */}
              
              <Typography variant="subtitle1" gutterBottom sx={{textAlign:"center", color:'black'}}>
                  {user.split('@')[0]}  

              </Typography>
              
              
          </Paper>
          </Grid>
        // </Container>
        
  ))}
  </Grid>
      {/* </Stack> */}
      
    </ul>
      </Container>
      
    </>
  )
}

export default Users
