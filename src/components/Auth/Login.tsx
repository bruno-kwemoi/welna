import { Button, Card, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';

function Login() {
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
        <Typography>Log in</Typography>
        <TextField label='Email Address'/>
        <TextField label='Password'/>
        <FormControlLabel control={<Checkbox />} label='Remember me' />
        <Button variant='contained' color='primary'
        sx={{width: 384, height: 40, borderRadius: 25, gap: 1}}
        onClick={() =>navigate('/')}
        >
            Log in
        </Button>
        <Divider>or</Divider>
        <Grid sx={{gap: 2,display: 'flex', justifyContent: 'center'}}>
          <AppleIcon />
          <GoogleIcon />
        </Grid>
        <Typography>Don't have an account? <Link href='/Signup'>Sign up</Link></Typography>
        <Divider orientation='vertical'></Divider> 
        <Typography><Link>forgot Password</Link></Typography>
    </Card>
  )
}

export default Login