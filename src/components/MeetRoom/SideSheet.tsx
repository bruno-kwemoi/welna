import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

import Poll from './Poll';

const CustomContainer = styled(Stack)(() => ({
    display: 'flex',
    width: '320px',
    paddingBottom: '0px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flexShrink: 0,
    borderLeft: '1.9px solid #E3E3E3',
    padding: 0,
}))

function SideSheet({ close }) {
    const [open, setOpen] = useState(false);
    const [isParticipant, setIsParticipant] = useState(true);

    const handleParticipant = () => {
        setIsParticipant(true);
    }
    const handlePoll = () => {
        setIsParticipant(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return (
        <CustomContainer className='maincontainer'>
            <Poll open={open} onClose={handleClose} />
            <Stack
                sx={{ height: '100%', width: '100%' }}
                divider={<Divider sx={{ border: '1px solid #E3E3E3', }} />}
            >
                <Stack className='sidemaincontent' sx={{ height: '100%', width: '100%', p: 2, gap: 2 }}
                >
                    <ButtonGroup
                        sx={{ borderRadius: '100', '& > *': { width: '100%' } }}>
                        <Button onClick={handleParticipant}
                            variant={isParticipant ? 'contained' : 'outlined'}
                            startIcon={isParticipant ? <CheckIcon /> : ''}
                            sx={{ borderRadius: '100px' }}>
                            Participants
                        </Button>
                        <Button onClick={handlePoll}
                            variant={isParticipant ? 'outlined' : 'contained'}
                            startIcon={isParticipant ? '' : <CheckIcon />}
                            sx={{ borderRadius: '100px' }}>
                            Polls
                        </Button>
                    </ButtonGroup>

                    {
                        isParticipant ?
                            <Stack className='sidecontent' sx={{ height: '100%' }}>
                                <TextField variant="outlined"
                                    sx={{
                                        width: '100%'
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }} />
                                <List>
                                    <ListItem disablePadding >
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <Avatar sx={{ background: '#D6F3F7', color: '#237E97' }}>A</Avatar>
                                            </ListItemIcon>
                                            <ListItemText primary="You | Kitty Wang" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Stack> :
                            <Stack sx={{ justifyContent: 'center', alignItems: 'center', gap: '16px', height: '100%' }}>
                                <img src='./assets/Group 26795.svg' />
                                <Typography>No Polls</Typography>
                                <Button
                                    sx={{ borderRadius: '100px' }}
                                    variant='contained'
                                    onClick={handleOpen}
                                    startIcon={<AddIcon />}>
                                    New Poll
                                </Button>
                            </Stack>
                    }


                </Stack>
                <Stack className='sidefooter' sx={{
                    display: 'flex',
                    padding: '16px 24px 24px 24px',
                    alignItems: 'center',
                    gap: '8px',
                    alignSelf: 'flex-start'
                }}>
                    <Button variant='outlined' onClick={() => close()}>Close</Button>
                </Stack>
            </Stack>
        </CustomContainer >
    )
}

export default SideSheet