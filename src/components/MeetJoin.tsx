import React, { useState } from "react";
import {
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";
import { ListItemIcon, ListItemText, Radio, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import { useNavigate } from "react-router-dom";

function MeetJoin() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleNavigation = () => {
    setOpen(false);
    navigate("SelectMic");
  };
  return (
    <>
      {open ? (
        <Dialog
          open={open}
          style={{
            backgroundColor: "rgba(128,128,128,0.2)",
          }}
          PaperProps={{
            style: {
              height: "281px",
              width: "620px",
              borderRadius: "28px",
              display: "flex",

              alignItems: "flexStart",
              justifyContent: "flexStart",

              overflow: "hidden",
            },
          }}
        >
          <div
            style={{
              height: "auto",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                padding: '24px',
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '32px',
              }}
            >
              How would you like to join?
            </Typography>
          </div>
          <List
            sx={{
              paddingTop: "0",
              display: "flex",
              alignItems: 'flex-end',
              flexDirection: "column",
              maxHeight: "201px",
            }}
          >
            <ListItem
              style={{
                padding: "24px",
                maxHeight: "56px",
              }}
            >
              <ListItemIcon>
                <MicIcon />
              </ListItemIcon>
              <ListItemText primary="Microphone" />
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </ListItem>

            <ListItem
              sx={{
                padding: '24px',
                maxHeight: "57px",
              }}
            >
              <ListItemIcon>
                <HeadsetIcon />
              </ListItemIcon>
              <ListItemText primary="Listen Only" />
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
              />
            </ListItem>
          </List>
          <div
            style={{
              maxHeight: '88px',
              width: '100%',
              display: 'flex',

              gap: '0.5rem',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: ' 24px 10px 24px 10px',


            }}
          >
            <Button onClick={handleClose}>cancel</Button>
            <Button
              variant="contained"
              onClick={handleNavigation}
              style={{
                marginRight: '24px',
                borderRadius: "100px",

              }}
            >
              next
            </Button>
          </div>
        </Dialog>
      ) : (

        <Box
          sx={{
            overflow: 'hidden',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",

          }}
        >
          {" "}
          <Button variant="outlined" onClick={handleOpen}>
            Join Meeting
          </Button>{" "}
        </Box>

      )}
    </>
  );
}

export default MeetJoin;
