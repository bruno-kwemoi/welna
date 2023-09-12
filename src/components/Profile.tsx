import React from 'react';
import { Avatar, Container, IconButton, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';


function Profile() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate('JoinMode');
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Container sx={{
            display: 'flex',
            width: '355px',
            paddingBottom: '0px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            flexShrink: 0
        }}>
            <Stack sx={{flexDirection: 'row', alignItems: 'center'}}>
                <Typography>Profile</Typography>
                <IconButton>
                    <Close />
                </IconButton>
            </Stack>
            <Avatar
                sx={{
                    width: '100px',
                    height: '100px',
                    background: '#D6F3F7',
                    color: '#269BB4',
                    alignSelf: 'center',
                    justifySelf: 'center', // Center the Avatar horizontally
                }}
            >
                A
            </Avatar>
            <Typography>Mimi Nakazawa</Typography>
            <Typography>miminakazawa@gmail.com</Typography>
            <Stack sx={{ flexDirection: 'row', gap: '16px' }}>
                <IconButton
                    sx={{ background: '#22657C', color: '#fff' }}
                >
                    <CallIcon />
                </IconButton>
                <IconButton
                    onClick={handleJoin}
                    sx={{ background: '#22657C', color: '#fff' }}
                >
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton
                    sx={{ background: '#22657C', color: '#fff' }}
                >
                    <MailOutlinedIcon />
                </IconButton>
            </Stack>
            <ListItem>
                <ListItemText primary="Attachments" />
                <ListItemButton onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemText primary="Links" />
                <ListItemButton onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
        </Container>
    )
}

export default Profile