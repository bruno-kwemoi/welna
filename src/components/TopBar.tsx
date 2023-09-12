import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function TopBar() {
    return (
        <AppBar position="static" sx={{ background: "#ffff" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ color: "#D6F3F7", marginRight: "8px" }}>W</Avatar>
                    <Typography variant="h6" component="div" sx={{ color: "#269BB4" }}>
                        Welna
                    </Typography>
                </div>
                <Typography sx={{ color: "#1A1A1A" }}>Mimi Nakazawa</Typography>
                <div>
                    <Button variant="outlined">00:53</Button>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
