import { MoreVert, Search } from '@mui/icons-material'
import { Avatar, Container, IconButton, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'

function ChatWindow() {
    return (
        <Container sx={{
            display: 'flex',
            width: '554px',
            paddingBottom: '0px',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            flexShrink: 0
        }}>
            <Stack sx={{flexDirection: 'row', alignItems: 'center'}}>
            <Typography>Mimi Nakazawa</Typography>
            <IconButton>
                <Search />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
            </Stack>
            <List>
                <ListItem>
                    <Stack marginLeft='26px'>
                        <ListItemText>Me</ListItemText>
                        <ListItemText>Hey, Mimi! My name is Kitty. Dr Yumi mentioned we could collab on our Forum initiative to raise awareness for trans people and reproductive challenges they might face on daily basic...  Does it sound like something you might be interested in? Let me know, Thanks 🙂</ListItemText>
                    </Stack>
                    <Avatar src='src/assets/3d_avatar_3.png' sx={{ position: 'absolute', top: 0, right: 0 }} />
                </ListItem>
                <ListItem>
                    <Avatar sx={{ mr: '12px', position: 'absolute', top: 0, left: 0 }}>A</Avatar>
                    <Stack marginLeft='26px'>
                        <ListItemText>Mimi Nakazawa</ListItemText>
                        <ListItemText>Hi, Kitty! Very nice to meet you! What you are saying sound very interesting to me so I’m all in 🤩 Maybe we could have a quick call here or in other SNS app? Feel free to reach out 😌</ListItemText>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Avatar sx={{ mr: '12px', position: 'absolute', top: 0, left: 0 }}>A</Avatar>
                    <Stack marginLeft='26px'>
                        <ListItemText>Mimi Nakazawa</ListItemText>
                        <ListItemText>I think we have a lot in common and could do great things together!</ListItemText>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Avatar sx={{ mr: '12px', position: 'absolute', top: 0, left: 0 }}>A</Avatar>
                    <Stack marginLeft='26px'>
                        <ListItemText>Mimi Nakazawa</ListItemText>
                        <ListItemText>Give me a call whenever you have time,  Let’s discuss our next steps!</ListItemText>
                    </Stack>
                </ListItem>
            </List>
        </Container>
    );
};

export default ChatWindow;