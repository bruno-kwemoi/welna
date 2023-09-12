import { useState } from 'react';
import { Autocomplete, Button, Dialog,
    InputAdornment,TextField, Typography } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';

function SelectMic() {
    const [close, setClose] = useState(true)
    const options = ['USB Condenser Microphone (31b2:0011)', 'Built-in Mic(Macbook pro)', 'Bluetooth'];
    const navigate = useNavigate();

    const handleClose = () => {
        setClose(false);
        navigate('/');
    };
    const handleNext = () => {navigate('/MainApp',{replace: true})};
  return (
    <Dialog open={close}
    sx={{
      backgroundColor:'rgba(128,128,128,0.2)',
    }}
    PaperProps={{
      style: {
        display:'flex',
        flexDirection:'column',
        borderRadius:'28px',
        width: '620px', 
        minHeight: '270px'
      }}}>
      <div
style={{display: 'flex',
padding: '24px',
flexDirection: 'column',
alignItems: 'flex-start',
gap: '16px',
alignSelf: 'stretch',
}}>
      <Typography style={{color: '#112E3B',
      fontFamily: 'Spline Sans',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '32px',
      height: '32px'
      }}>Select Microphone</Typography>
    
      </div>
      <Autocomplete disableClearable options={options} renderInput={(params) => <TextField {...params} InputProps={{
            ...params.InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <MicIcon />
            </InputAdornment>
          )
        }} 
        style={{
          borderRadius: '4px 4px 0px 0px'
          }}/>}
          style={{
            height: '66px',
            padding: '0px 24px 10px 24px',
            gap: '10px'
            }}/>
      <div style={{display: 'flex',
        padding: '24px 24px 24px 16px',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch'
        }}>
      <Button onClick={handleClose}>cancel</Button>
      <Button sx={{
        width: '78px',
        gap: '8px'
      }} variant='contained' onClick={handleNext}>next</Button>
      </div>
    </Dialog>
  )
}

export default SelectMic