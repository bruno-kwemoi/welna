import React from 'react'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    
     <div>
      <Button onClick={handleOpen} variant='contained'
      sx={{
        backgroundColor:'blue',
      }}
      >Show backdrop</Button>
     
      <Backdrop
        sx={{ color: '#fff', backgroundColor:'rgba(67, 67, 67, 0.9)',}}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}