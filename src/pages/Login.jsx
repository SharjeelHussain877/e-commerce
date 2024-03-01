import './style.scss'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import LoginForm from '../components/LoginForm';
import { login } from '../assets';

function Login() {
  return (

    <section className='login-page'>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={12} sm={6}>
                <LoginForm />
              </Grid>
              <Grid xs={0} sm={6} display={{ xs: "none", sm: "block" }}>
                {/* <img src={login} alt="" /> */}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </section>
  )
}

export default Login