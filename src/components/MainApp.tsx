import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Backdrop,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import IconButton from "@mui/material/IconButton";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";

import BottomBar from "./BottomBar";
import SideSheet from "./SideSheet";
import TopBar from "./TopBar";

export default function MainApp() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <div style={{ display: "flex" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "24px",
            top: "100px",
            left: "32px",
            height: "580px",
            paddingRight: "24px",
            border: "1px solid #269BB4",
          }}
        >
          <IconButton
            edge="start"
            sx={{
              mr: 2,
              alignSelf: "flex-start",
              right: "189px",
              backgroundColor: "#E1EBEC",
            }}
          >
            <MicIcon />
          </IconButton>
          <IconButton
            onClick={handleToggle}
            edge="start"
            sx={{
              mr: 2,
              alignSelf: "flex-start",
              right: "192px",
              backgroundColor: "#E14151",
              color: "#FFFFFF",
            }}
          >
            <VideocamOffOutlinedIcon />
          </IconButton>
          <Avatar
            sx={{
              width: "200px",
              height: "200px",
              background: "#D6F3F7",
              color: "#269BB4",
            }}
          >
            MN
          </Avatar>
        </Container>
        <SideSheet />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
