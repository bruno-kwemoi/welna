import React, { useState } from 'react'
import { Button, Divider, List, ListItem } from '@mui/material'
import { ListItemIcon, ListItemText, Radio, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';





function MeetJoin() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    }
  
    const handleClose = () => {
      setOpen(false)
    }
    const handleOpen = () => {
      setOpen(true);
    }
    const handleNavigation = () => {
      setOpen(false);
      navigate('SelectMic');
  
    }
  return (
    <>
    {open ?
    <Dialog open={open} 
    sx={{
      maxWidth:"620px", 
 /*      height: '317px',  */
 /*      top: '100px',  */
      borderRadius:'28px', 
    /*   left: '410px' */
  
    }}
    PaperProps={{
      style: {
        borderRadius:'28px',
        margin: 0,
        width: '100%',
        maxWidth: '100%', 
        maxHeight: '100%'
        
      },
    }}>
      <div
style={{
padding:'24px',
gap:'16px',
display: 'flex',
flexDirection: 'column',
overflow:'hidden',

  

}}>
      <Typography 
      style={{color: '#112E3B',
      fontFamily: 'Spline Sans',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '32px',
      height: '32px'
      }}>
        How would you like to join?
      </Typography>
      <Typography 
      style={{
        color: '#434343',
        fontFamily: 'Spline Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0.25px',
        height: '20px'
      }}>
        Please choose if you want to participate in conversation
      </Typography>
      </div>
      <List style={{height: '113px',
      gap:'16px',
      display:'flex',
      flexDirection:'column',
      

  
    }}>
          <ListItem style={{height: '57px'}}>
              <ListItemIcon>
                <MicIcon />
              </ListItemIcon>
              <ListItemText primary="Microphone" />
              <Radio checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }} />
          </ListItem>
          <Divider />
          <ListItem style={{height: '56px'}}>
              <ListItemIcon>
                <HeadsetIcon />
              </ListItemIcon>
              <ListItemText primary="Listen Only" />
              <Radio checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }} />
          </ListItem>
        </List>
      <div style={{display: 'flex',
        padding: '24px 24px 24px 16px',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch'
        }}>
      <Button onClick={handleClose}>cancel</Button>
      <Button variant='contained' onClick={handleNavigation}
      style={{
        width: '78px',
        height: '40px',
        borderRadius: '100px',
        gap: '8px'
      }}>
        next
    </Button>
      </div>
    </Dialog>
     : <Box className ='joinBox' 
     style={
      {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
      }
     }
     >
<Button variant='outlined' onClick={handleOpen}>Join Meeting</Button> 
 </Box>
    }
    </>
  )
}


export default MeetJoin