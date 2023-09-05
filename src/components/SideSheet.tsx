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
            display: 'flex',
            width: '320px',
            height: '876px',
            paddingBottom: '0px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flexShrink: 0
        }}>
            <ButtonGroup variant="contained"
                sx={{ borderRadius: '100px', mt: '8px', mb: '8px', backgroundColor: '#D6F3F7' }}>
                <Button onClick={handleParticipant} startIcon={<CheckIcon />} sx={{ borderRadius: '100px' }}>Participants</Button>
                <Button onClick={handlePoll} sx={{ borderRadius: '100px' }}>Polls</Button>
            </ButtonGroup>
            { isParticipant ?
            <div>
            <TextField variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar>A</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="You | Kitty Wang" />
                    </ListItemButton>
                </ListItem>
            </List>
            </div> :
            <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Button>No Polls</Button>
            <Button sx={{borderRadius: '100px'}} variant='contained' startIcon={<AddIcon/>}>New Poll</Button>
            </Stack>
            }
            <div style={{ position: 'absolute', bottom: '0' }}>
                <Button>Close</Button>
            </div>
        </Container>
    )
}

export default SideSheet