import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';


function TopBar() {
    return (
        <AppBar position="static" sx={{ background: '#ffff' }}>
            <Toolbar>
                <Avatar sx={{ color: '#D6F3F7', marginRight: '8px' }}>W</Avatar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#269BB4' }}>
                    Welna
                </Typography>
                <Typography sx={{ marginRight: '520px', color: '#1A1A1A' }}>Mimi Nakazawa</Typography>
                <Button variant='outlined'>00:53</Button>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar