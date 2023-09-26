import React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CustomAvatar = styled(Avatar)(() => ({
    width: '24px',
    height: '24px',
    background: "#D6F3F7",
    color: '#237E97'
}));


const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px',
    width: '79px',
    borderRadius: '4px',
    flexShrink: 0,
    border: '1px solid #C8C8C8',
    background: '#F7F7F7',
    color: '#434343'
}));

function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ background: "#ffff", borderBottom: '1px solid #E3E3E3' }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Stack style={{
                    display: "flex",
                    padding: '6px 6px 6px 6px',
                    alignItems: "center",
                    flexDirection: 'row',
                    borderRadius: '4px',
                    gap: '6px'
                }}>
                    <CustomAvatar>
                        <Typography sx={{ color: '#237E97', lineHeight: '24px' }} variant='subtitle1'>W</Typography>
                    </CustomAvatar>
                    <Typography variant="subtitle1">
                        Wellna
                    </Typography>
                </Stack>
                <Typography variant="h4">Mimi Nakazawa</Typography>
                <Stack sx={{ flexDirection: 'row', gap: '24px' }}>
                    <Div>00:53</Div>
                    <IconButton
                        id='button-basic'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'button-basic',
                    }}
                >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    <MenuItem onClick={handleClose}>End Call</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
