import * as React from 'react';
import './style.scss';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Form } from '../components';
import { vector } from './../assets';
import GoogleSignUp from './../components/GoogleAndFacebook.jsx';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function SignUp() {
    return (
        <div className='sign-up-section'>
            <NavLink to='/'>
                <ArrowBackIcon className='back-icon'/>
            </NavLink>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth='md'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={0} sm={6} display={{ xs: "none", sm: "block" }}>
                                <img src={vector} alt="logIn" className='signup-side-img' />
                            </Grid>
                            <Grid item xs={12} sm={6} className='main'>
                                <h1>Create Account</h1>
                                <div className='form-sec'>
                                    <Form />
                                </div>
                                <div className='or'>
                                    <span>Or</span>
                                </div>
                                <GoogleSignUp />
                                <div className='login'>
                                    <span>Already have an accout? <br /> 
                                        <NavLink to='/login'> Sign in</NavLink>
                                    </span>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    );
}