import * as React from 'react';
import './style.scss';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Form } from '../components';
import { googleIcon, facebookIcon, vector, signupImg, backIcon } from './../assets';
import { NavLink } from 'react-router-dom';


export default function SignUp() {
    return (
        <div className='sign-up-section'>
            <NavLink to='/home'>
                <img src={backIcon} alt="back-icon" className='back-icon' />
            </NavLink>
            <React.Fragment>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={0} sm={6}>
                            <img src={vector} alt="logIn" className='login-img' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='main'>
                            <h1><img src={signupImg} alt="signup" /> Create Account</h1>
                            <div className='form-sec'>
                                <Form />
                            </div>
                            <div className='or'>
                                <span>Or</span>
                            </div>
                            <div className='other-signup'>
                                <div>
                                    <img src={googleIcon} alt="google-icon" />
                                    <span>Continue with Google</span>
                                </div>
                                <div>
                                    <img src={facebookIcon} alt="facebook-icon" />
                                    <span>Continue with Facebook</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        </div>
    );
}