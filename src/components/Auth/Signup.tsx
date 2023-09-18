import { Button, Card, Checkbox, Divider, Link } from '@mui/material' 
import {FormControlLabel, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  return (
    <Card sx={{
        position: 'absolute',
        display: 'grid',
        width: 512,
        top: 140,
        left: 120,
        padding: 8,
        borderRadius: 5,
        gap: 3
        }}>
        <Typography variant='body2'>Sign up</Typography>
        <TextField label='Full Name'></TextField>
        <TextField label='Email Address'></TextField>
        <TextField label='Password'></TextField>
        <TextField label='Confirm Password'></TextField>
        <FormControlLabel control={<Checkbox />} label='I agree to terms and conditions'/>
        <Button onClick={() =>navigate('/Login')} variant='contained'>Sign up</Button>
        <Divider>or</Divider>
        <Typography>Do you have an account? <Link href='/Login'>Sign in</Link></Typography>
    </Card>
  )
}

export default Signup