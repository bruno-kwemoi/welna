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
    }
  return (
    <Dialog open={close}
    style={{maxWidth:"620px", 
      height: '270px', 
      top: '100px', 
      borderRadius:'28px', 
      left: '410px'}}
    PaperProps={{
      style: {
        borderRadius:'28px',
        margin: 0,
        width: '100%',
        maxWidth: '100%', 
        maxHeight: '100%'
      },}}>
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
      <Typography  style={{
        color: '#434343',
        fontFamily: 'Spline Sans',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: '0.25px',
        height: '20px'
      }}>Please choose which microphone would you like to use</Typography>
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
      <Button style={{
        width: '78px',
        height: '40px',
        borderRadius: '100px',
        gap: '8px'
      }} variant='contained'>next</Button>
      </div>
    </Dialog>
  )
}

export default SelectMic