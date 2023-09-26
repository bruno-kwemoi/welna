import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconButton, Paper, styled } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from 'react';

import messages from './messages';

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
}));

const styles = {
    chatContainer: {
        height: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            width: '0px',
        },
    },
};


function Chats({ close }) {
    const [input, setInput] = useState('');
    const [chatMessages, setChatMessages] = useState(messages);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            const newMessage = {
                sender: 'Bruno',
                time: new Date().toLocaleTimeString(),
                content: input,
            };
            setChatMessages([...chatMessages, newMessage]);
            setInput('');
        }
    };

    return (
        <CustomContainer className='maincontainer'>
            <Stack
                sx={{ height: '100%', width: '100%' }}
                divider={<Divider sx={{ border: '1px solid #E3E3E3', }} />}
            >
                <Stack className='sidemaincontent' sx={{ height: 'calc(100% - 90px)', width: '100%', p: 2, gap: 2, overflow: 'hidden' }}
                >
                    <Stack className='sideHeader' sx={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Typography>Chat</Typography>
                            <ArrowDropDownIcon />
                        </Stack>
                        <CloseIcon onClick={() => close()} />
                    </Stack>
                    <Stack sx={styles.chatContainer}>
                        <List>
                            {chatMessages.map((message, index) => (
                                <ListItem sx={{ flexDirection: 'column' }}
                                    key={index}
                                    className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                                    <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                        <ListItemText primary={message.sender} />
                                        {/* <div style={{ flex: 2 }}></div> */}
                                        <ListItemText primary={message.time} />
                                    </Stack>
                                    <ListItemText primary={message.content} />
                                </ListItem>
                            ))}
                        </List>
                    </Stack>
                </Stack>
                <Stack className='sidefooter' sx={{
                    display: 'flex',
                    padding: '16px 24px 24px 24px',
                    alignItems: 'center',
                    gap: '8px',
                    alignSelf: 'flex-start'
                }}>
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AttachFileIcon />
                        <TextField
                            fullWidth
                            placeholder='Write a message...'
                            variant="outlined"
                            value={input}
                            onChange={handleInputChange}
                            InputProps={{
                                sx: {
                                    width: '100%',
                                    display: 'flex',
                                    paddingLeft: '0px',
                                    paddingRight: '4px',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flex: '1 0 0',
                                    borderRadius: '74px',
                                    border: '1px solid #E3E3E3'
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleSendMessage}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '4px',
                                                backgroundColor: '#269BB4',
                                                color: '#E3E3E3',
                                                height: '48px',
                                                width: '48px'
                                            }}>
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                    </Stack>
                </Stack>
            </Stack>
        </CustomContainer >
    )
}

export default Chats