import React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Backdrop, CircularProgress, Container, Stack, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import { styled } from '@mui/material/styles';

import BottomBar from './BottomBar';
import SideSheet from './SideSheet';
import TopBar from './TopBar';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

export default function MainApp() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleToggle = () => setOpen(!open);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <TopBar />
            <div style={{ display: 'flex', outlineColor: '#D6F3F7', }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        paddingLeft: '24px',
                        paddingTop: '24px', // Add paddingTop to control the space at the top
                        border: '1px solid #269BB4',
                        position: 'relative', // Add position relative to contain absolutely positioned elements
                        height: '580px',
                        borderRadius: '24px',
                        margin: '24px'
                    }}
                >
                    <Stack
                        sx={{
                            position: 'absolute', // Position the Stack absolutely
                            top: '0', // Place it at the top
                            left: '0', // Place it at the left
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '12px'
                        }}
                    >
                        <IconButton sx={{ mr: 2, backgroundColor: '#E1EBEC' }}>
                            <MicIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleToggle}
                            sx={{ mr: 2, backgroundColor: '#E14151', color: '#FFFFFF' }}
                        >
                            <VideocamOffOutlinedIcon />
                        </IconButton>
                        <Div
                            sx={{
                                borderRadius: '50px',
                                backgroundColor: '#E1EBEC',
                                textTransform: 'unset',
                                color: '#112E3B',
                            }}
                        >
                            Mimi Nakazawa
                        </Div>
                    </Stack>
                    <Avatar
                        sx={{
                            width: '200px',
                            height: '200px',
                            background: '#D6F3F7',
                            color: '#269BB4',
                            alignSelf: 'center',
                            justifySelf: 'center', // Center the Avatar horizontally
                        }}
                    >
                        MN
                    </Avatar>
                </Container>
                <SideSheet />
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <Stack gap={1} justifyContent="center" alignItems="center">
                        <CircularProgress color="inherit" />
                        <Typography>Loading...</Typography>
                    </Stack>
                </Backdrop>
            </div>
            <BottomBar />
        </Box>
    );
}