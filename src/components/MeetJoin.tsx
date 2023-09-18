import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Stack } from '@mui/material';
import Profile from './Profile';
import ChatWindow from './ChatWindow';
import ChatList from './ChatList';
import SideBar from './SideBar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: '18px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function MeetJoin() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <MenuIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Hinted search text"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton color='inherit'>
              <SearchIcon />
            </IconButton>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>
            <Avatar src='src/assets/3d_avatar_3.png'/>
          </Box>
        </Toolbar>
      </AppBar>
      <Stack sx={{ flexDirection: 'row' }}>
        <SideBar />
        <ChatList />
        <ChatWindow />
        <Profile />
      </Stack>
    </>
  );
}

export default MeetJoin;
