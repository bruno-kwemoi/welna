import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BackHandIcon from '@mui/icons-material/BackHand';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';

export default function BottomBar() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/');
    }

    return (
        <AppBar position="fixed" sx={{ top: "auto", bottom: "0", background: "#ffff" }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <IconButton edge="start" sx={{ mr: 2, backgroundColor: "#E1EBEC" }}>
                        <MicIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E14151", color: "#FFFFFF" }}
                    >
                        <VideocamOffOutlinedIcon />
                    </IconButton>
                </div>
                <div style={{ left: "410px", position: "fixed" }}>
                    <IconButton size="small" sx={{ mr: 2, backgroundColor: "#E1EBEC" }}>
                        <GroupOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <PresentToAllOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <NoteAltOutlinedIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <BackHandIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <RadioButtonCheckedIcon />
                    </IconButton>
                    <IconButton
                        size="small"
                        edge="start"
                        sx={{ mr: 2, backgroundColor: "#E1EBEC" }}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <Button
                    color="error"
                    variant="contained"
                    onClick={handleNext}
                >
                    Leave
                </Button>
            </Toolbar>
        </AppBar>
    );
}