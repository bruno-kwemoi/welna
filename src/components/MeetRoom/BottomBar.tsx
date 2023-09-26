import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicOffOutlined from '@mui/icons-material/MicOffOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicIcon from '@mui/icons-material/Mic';
import Stack from '@mui/material/Stack'
import { Menu, MenuItem, styled } from '@mui/material';

const CustomIconButton = styled(IconButton)(() => ({
    backgroundColor: "#E1EBEC",
    color: '#434343'
}))

export default function BottomBar({
    display, setDisplay,
    change, screenShare, share, activeButton,
    setActiveButton, chat, mute, muteState, unmute, cam, camState, camOff }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnChangeClick = () => {
        change();
        setActiveButton('change');
    };

    const handleOnChatClick = () => {
        chat();
        setActiveButton('chat');
    };
    const toggleBoard = () => {
        if (display === 'video' || display === 'notepad') {
            setDisplay('board')
        } else if (display === 'board') {
            setDisplay('video')
        }
    };
    const togglePad = () => {
        if (display === 'video' || display === 'board') {
            setDisplay('notepad')
        } else if (display === 'notepad') {
            setDisplay('video')
        }
    };
    return (
        <AppBar position="fixed" sx={{ top: "auto", bottom: "0", background: "#ffff" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Stack sx={{ flexDirection: 'row', gap: '16px' }}>
                    {muteState ?
                        <IconButton sx={{ backgroundColor: '#E14151', color: '#FFFFFF' }} onClick={() => unmute()}>
                            <MicOffOutlined />
                        </IconButton> :
                        <CustomIconButton sx={{ color: '#1E282E' }} onClick={() => mute()}>
                            <MicIcon />
                        </CustomIconButton>
                    }
                    {camState ?
                        <CustomIconButton onClick={() => camOff()} sx={{ color: '#1E282E' }} >
                            <VideocamOutlinedIcon />
                        </CustomIconButton> :
                        <IconButton onClick={() => cam()} sx={{ backgroundColor: "#E14151", color: "#FFFFFF" }}>
                            <VideocamOffOutlinedIcon />
                        </IconButton>
                    }
                </Stack>
                <Stack sx={{ alignSelf: 'center', flexDirection: 'row', gap: '16px' }}>
                    <CustomIconButton sx={{
                        backgroundColor: activeButton === 'change' ? '#269BB4' : '#E1EBEC',
                        color: activeButton === 'change' ? '#fff' : '#434343',
                    }}
                        onClick={handleOnChangeClick}>
                        <GroupOutlinedIcon />
                    </CustomIconButton>
                    <CustomIconButton sx={{
                        backgroundColor: activeButton === 'chat' ? '#269BB4' : '#E1EBEC',
                        color: activeButton === 'chat' ? '#fff' : '#434343',
                    }}
                        onClick={handleOnChatClick}>
                        <ChatBubbleOutlineOutlinedIcon />
                    </CustomIconButton>
                    <CustomIconButton sx={{
                        backgroundColor: screenShare ? '#269BB4' : '#E1EBEC',
                        color: screenShare ? '#fff' : '#434343',
                    }}
                        onClick={() => share()}>
                        <PresentToAllOutlinedIcon />
                    </CustomIconButton>
                    <CustomIconButton sx={{
                        backgroundColor: display === 'board' ? '#269BB4' : '#E1EBEC',
                        color: display === 'board' ? '#fff' : '#434343',
                    }}
                        onClick={toggleBoard}>
                        <VideoLabelIcon />
                    </CustomIconButton>
                    <CustomIconButton sx={{
                        backgroundColor: display === 'notepad' ? '#269BB4' : '#E1EBEC',
                        color: display === 'notepad' ? '#fff' : '#434343',
                    }}
                        onClick={togglePad} >
                        <NoteAltOutlinedIcon />
                    </CustomIconButton>
                    <CustomIconButton>
                        <img src='./assets/front_hand_24px.svg' />
                    </CustomIconButton>
                    <CustomIconButton>
                        <RadioButtonCheckedIcon />
                    </CustomIconButton>
                    <IconButton sx={{
                        backgroundColor: open ? '#269BB4' : null,
                        color: open ? '#fff' : '#434343',
                    }} onClick={handleClick}>
                        <MoreVertIcon sx={{ alignSelf: 'center' }} />
                    </IconButton>
                </Stack>
                <Button
                    color="error"
                    variant="contained"
                    sx={{
                        ":hover": {
                            bgcolor: "#CF2F47"
                        }
                    }}
                >
                    Leave
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'button-basic',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Display External Link</MenuItem>
                    <MenuItem onClick={handleClose}>Start RTMP broadcasting</MenuItem>
                    <MenuItem onClick={handleClose}>Start External Media Player</MenuItem>
                    <MenuItem onClick={handleClose}>Mute all users</MenuItem>
                    <MenuItem onClick={handleClose}>Disable shared Notepad</MenuItem>
                    <MenuItem onClick={handleClose}>Mute all users</MenuItem>
                    <MenuItem onClick={handleClose}>Manage Breakout Room </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}