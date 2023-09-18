import { Avatar, Button, ButtonGroup, Container, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function SideSheet() {
    const [isParticipant, setIsParticipant] = useState(true);

    const handleParticipant = () => {
        setIsParticipant(true);
    }
    const handlePoll = () => {
        setIsParticipant(false);
    }

    return (
        <Container sx={{
            position:'relative',
        
            display: 'flex',
            maxWidth: '320px',
            maxHeight: '876px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'flex-start',
            alignContent:'flex-start',
        }}>
          
            <ButtonGroup 
                sx={{ 
                  padding:'20px  16px 20px 16px',
                
                 }}>
                <Button onClick={handleParticipant} startIcon={<CheckIcon />} sx={{ backgroundColor:'#D6F3F7',
                    width:'143.5px',
                    borderRadius: '50px' }}>Participants</Button>
                <Button onClick={handlePoll} sx={{ borderLeft:'1px solid grey',
                    borderRadius: '50px',backgroundColor:'#D6F3F7',
              width:'143.5px',
            }}>Polls</Button>
            </ButtonGroup>  
            { isParticipant ?
            
          
            <div>
            
            <TextField 
            sx={{
               display:'flex',
                alignItems:'center',
                gap:'1rem'
            }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
            <List sx={{
               
                minWidth:'319px',
                
            }}>
                <ListItem disablePadding>
             
                    <ListItemButton>
                        <ListItemIcon>
                        
                            <Avatar sx={{
                                backgroundColor:'#D6F3F7',color:'rgba(38, 155, 180, 1)',}}>A</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="You | Kitty Wang" />
                    </ListItemButton>
                </ListItem>
            </List>
            </div> :
            <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Button>No Polls</Button>
            <Button sx={{borderRadius: '100px'}}  startIcon={<AddIcon/>}>New Poll</Button>
            </Stack>
            }
            <div  
             style={{ minWidth:'319px', position: 'absolute', bottom: '10%', alignItems:'flexStart', paddingLeft:'24px',display:'flex', color:'white', }}>
                <Button variant='outlined' sx={{borderRadius:'42px',}}>Close</Button>
            </div>
        </Container>
    )
}

export default SideSheet