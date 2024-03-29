import './style.scss'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import LoginForm from '../components/LoginForm';
import { login } from '../assets';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Login() {
  return (
<section className='login-page'>
        <NavLink to='/home'>
          <ArrowBackIcon className='back-icon'/>
        </NavLink>
    <div className='login-sec'>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container className='login-section'>
              <Grid xs={12} sm={6}>
                <LoginForm />
              </Grid>
              <Grid xs={0} sm={6} display={{ xs: "none", sm: "block" }} className='login-img'>
                <img src={login} alt="login-side" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
</section>
  )
}

export default Login