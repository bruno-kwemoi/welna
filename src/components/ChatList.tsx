import { Autocomplete, Avatar, Container, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


function ChatList() {
    const options = [''];

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
            <Typography>Chats</Typography>
            <Autocomplete freeSolo
                disableClearable
                options={options}
                sx={{
                    width: '323px',
                    padding: '0px 24px 10px 24px',
                    gap: '10px'
                }}
                renderInput={(params) => <TextField {...params}
                    sx={{
                        borderRadius: '4px 4px 0px 0px'
                    }}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />}
            />
            <List>
                <ListItem>
                    <Avatar sx={{ mr: '12px' }}>A</Avatar>
                    <Stack>
                        <ListItemText>Mimi Nakazawa</ListItemText>
                        <ListItemText>Hi, Kitty! Very nice to meet yo...</ListItemText>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Avatar sx={{ mr: '12px' }}>A</Avatar>
                    <Stack>
                        <ListItemText>Aya Tsuji</ListItemText>
                        <ListItemText>So happy to have this apport...</ListItemText>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Avatar sx={{ mr: '12px' }}>A</Avatar>
                    <Stack>
                        <ListItemText>Vivienne Wu</ListItemText>
                        <ListItemText>Omg i know right!</ListItemText>
                    </Stack>
                </ListItem>
            </List>
        </Container>
    )
}

export default ChatList