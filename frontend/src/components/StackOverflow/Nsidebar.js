import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


// New Added Component
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import StyleIcon from '@mui/icons-material/Style';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import  Stack  from '@mui/material/Stack';
import { Link } from "react-router-dom";

export default function NestedList({ onPageChange }) {
  const [open, setOpen] = React.useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handlePageChange = (page) => {
    onPageChange(page);
  };
  
  return (
    <>

      
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#3a4bb7', color:'white', margin:0}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: '#3a4bb7'}}>
          <Stack direction="row" spacing={10.4}>
             <button onClick={() => handlePageChange('Home')}><KeyboardBackspaceIcon/></button>
             <button onClick={() => handlePageChange('Home')}><ArrowForwardIcon/></button>

          </Stack>
          
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handlePageChange('Home')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
      </ListItemButton>
      

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Activity" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => handlePageChange('Questions')}>
                <ListItemIcon>
                  <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary="Questions" />
          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }} onClick={() => handlePageChange('Posts')}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Articles" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={() => handlePageChange('Contributions')}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Contributions" />
          </ListItemButton>
            <ListItemButton sx={{ pl: 4 ,color: 'white'}} onClick={() => handlePageChange('Tags')}>
                    <ListItemIcon>
                      <StyleIcon />
                    </ListItemIcon>
                  
                  <ListItemText primary="Tags" />
            </ListItemButton>
          


          <ListItemButton sx={{ pl: 4 }} onClick={() => handlePageChange('Users')}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
          </ListItemButton>

          
        </List>
      </Collapse>
      <ListItemButton onClick={() => handlePageChange('Settings')}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
    </>
    
  );
}