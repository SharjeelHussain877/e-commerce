import './style.scss'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { TextField, Box, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { NavLink } from 'react-router-dom';

function LoginForm() {
    const [signInData, setSignInData] = React.useState({
        email: '',
        password: ''
    });
    console.log(signInData)

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setSignInData({
            ...signInData,
            [name]: value
        });
    };

    return (
        <section >
            <Box className='login' sx={{ maxWidth: 500 }}>
                <Typography variant="h2" gutterBottom className='head'>
                    Welcome back
                </Typography>
                <Typography variant="subtitle1" gutterBottom className='sub-title'>
                    Welcome back! please enter your details.
                </Typography>
                <form>
                    <TextField
                        onChange={handleFormChange}
                        label='email'
                        className='field'
                        name="email"
                        color='warning'
                    />

                    <FormControl variant="outlined" className='field' color='warning'>
                        <InputLabel >Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleFormChange}
                            name='password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Box className='forgot'>
                        <Typography variant="subtitle2" gutterBottom className='remember'>
                            <FormControlLabel className='remember-check' control={<Checkbox defaultChecked className='check' />} label="Remember me" />
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom className='remember'>
                            Forgot Password
                        </Typography>
                    </Box>
                    <Button variant="contained" color="warning" className='signin-btn' >Sign in</Button>
                </form>
                <Typography variant="subtitle1" className='text'>
                    Don’t have an account? <br /><NavLink to='/signup'> Sign up fo free!</NavLink>
                </Typography>
            </Box>
        </section>
    )
}

export default LoginForm