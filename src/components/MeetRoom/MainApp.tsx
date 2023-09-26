import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import MicOffOutlined from '@mui/icons-material/MicOffOutlined';
import { styled } from '@mui/material/styles';

import BottomBar from './BottomBar';
import SideSheet from './SideSheet';
import TopBar from './TopBar';
import Chats from './Chats';
import SelectCam from './SelectCam';
import ScreenShare from './ScreenShare';
import WhiteBoard from './WhiteBoard';
import NotePad from './NotePad';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    padding: '10px 16px',
    borderRadius: '50px',
    backgroundColor: '#E1EBEC',
    color: '#112E3B',
}));

const CustomContainer = styled(Stack)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '24px',
    border: '1px solid #269BB4',
    position: 'relative',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: 'white',
}));

const CustomStack = styled(Stack)(() => ({
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'row',
    margin: '24px',
    gap: '8px'
}));

const CustomAvatar = styled(Avatar)(() => ({
    width: '200px',
    height: '200px',
    background: '#D6F3F7',
    color: '#269BB4',
    alignSelf: 'center',
    justifySelf: 'center',
}));

export default function MainApp() {
    const [mute, setMute] = useState(false);
    const [cam, setCam] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isChats, setIsChats] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    const [screenShare, setScreenShare] = useState(false);
    const [display, setDisplay] = useState('video');

    const handleShare = () => setScreenShare(true);
    const handleStopShare = () => setScreenShare(false);
    const handleMute = () => setMute(true);
    const handleUnMute = () => setMute(false);
    const handleCam = () => {
        setCam(true);
        setDialogOpen(true);
    }
    const handleCamoff = () => {
        setCam(false);
        setDialogOpen(false);
    };
    const handleChange = () => {
        setIsOpen(true);
        setIsChats(false);
        setActiveButton('change');
    };
    const handleChats = () => {
        setActiveButton('chat');
        setIsChats(true);
        setIsOpen(false);
    };
    const handleClose = () => {
        setActiveButton('');
        setIsOpen(false);
        setIsChats(false);
    };

    return (
        <>
            <SelectCam open={isDialogOpen} onClose={handleCamoff} />
            <ScreenShare screenShare={screenShare} stopShare={handleStopShare} />
            <CssBaseline />
            <Stack className="mainContainer" sx={{ flexGrow: 1, background: '#EFFBFC', height: '100vh', overflow: 'hidden' }}>
                <TopBar />
                <Stack className="contentBodyContainer" sx={{ height: 'calc(100% - 64px)' }}>
                    <Stack className="contentContainer" sx={{ height: '100%', flexDirection: 'row', overflow: 'hidden' }}>
                        <Stack sx={{
                            padding: 2, height: '100%', width: '100%', outlineColor: '#D6F3F7',
                            '@media(min-width:1300px)': {
                                padding: 2
                            }
                        }}>
                            {display === 'video' &&
                                <CustomContainer>
                                    <CustomStack>
                                        {mute ?
                                            <IconButton sx={{ backgroundColor: '#E14151', color: '#FFFFFF' }}>
                                                <MicOffOutlined />
                                            </IconButton> :
                                            <IconButton sx={{ backgroundColor: '#E1EBEC', color: '#434343' }}>
                                                <MicIcon />
                                            </IconButton>
                                        }
                                        {cam ?
                                            null :
                                            <IconButton sx={{ backgroundColor: '#E14151', color: '#FFFFFF' }}>
                                                <VideocamOffOutlinedIcon />
                                            </IconButton>
                                        }
                                        <Div> Mimi Nakazawa </Div>
                                    </CustomStack>
                                    <CustomAvatar>
                                        MN
                                    </CustomAvatar>
                                </CustomContainer>
                            }
                            {display === 'board' && <WhiteBoard />}
                            {display === 'notepad' && <NotePad />}
                        </Stack>
                        {isOpen ? <SideSheet close={handleClose} /> : null}
                        {isChats ? <Chats close={handleClose} /> : null}
                    </Stack>
                    <Stack className='emptyHiddenBottomBarBox' sx={{ height: 64, flexShrink: 0 }}></Stack>
                </Stack>
                <BottomBar
                    display={display}
                    setDisplay={setDisplay}
                    screenShare={screenShare}
                    share={handleShare}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    cam={handleCam}
                    camState={cam} camOff={handleCamoff}
                    change={handleChange} chat={handleChats} mute={handleMute} muteState={mute} unmute={handleUnMute} />
            </Stack>
        </>
    );
}