import './style.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { validatePassword, validateName, validatePhoneNumber, validateEmail } from './js/form.js'
import sign_up from '../firebase/userSignUp.js';

function Form() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [formData, setFormData] = React.useState({
        full_name: '',
        phone_no: '',
        city: '',
        email: '',
        gender: '',
        password: '',
        date_of_birth: ''
    });

    const passWordState = validatePassword(password)
    const fullNameState = validateName(formData.full_name)
    // const lastNameState = validateName(formData.last_name)
    const phoneNumberState = validatePhoneNumber(formData.phone_no)
    const emailState = validateEmail(formData.email)

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const signup = () => {
        if (formData.full_name == "") alert("Please enter your first name");
        else if (!fullNameState.state) alert("Please enter your correct name");
        // else if (formData.last_name == "") alert("Please enter your last name");
        // else if (!lastNameState.state) alert("Please enter your correct last name");
        else if (formData.phone_no == "") alert("Please enter your Phone number");
        else if (!phoneNumberState.state) alert("please enter your correct Phone number");
        else if (formData.email == "") alert("Please enter your email");
        else if (!emailState.state) alert("please enter your correct email address");
        // else if (formData.gender == "") alert("please select your gender")
        // else if (formData.date_of_birth == "") alert("please fill date of birth");
        else if (password == "") alert("please fill password");
        else if (!passWordState.state) alert("please fill correct password");
        else if (formData.password == '') alert("Please fill confirm password");
        else if (formData.password != password) alert("Password doesn't match");
        else {
            // sign_up(formData)
            setPassword('')
            setFormData({
                first_name: '',
                last_name: '',
                phone_no: '',
                city: '',
                email: '',
                gender: '',
                password: '',
                date_of_birth: ''
            })
        };
        alert(`Hello ${formData.full_name}`)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleGenderChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         gender: event.target.value,
    //     });
    // };
    // const handleDatePickerChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         date_of_birth: event.$d,
    //     });
    // };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <section className='form'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    '& .MuiFormControl-root': { m: 1, width: '25ch' }

                }}
                noValidate
                autoComplete="on"
            >
                <div>
                    <TextField
                        value={formData.first_name}
                        className='field'
                        name="first_name"
                        onChange={handleFormChange}
                        color='warning'
                        id="outlined-error"
                        label="Full name"
                        error={formData.full_name && !fullNameState.state ? true : false}
                        helperText={formData.full_name && fullNameState.message}
                    />
                    {/* <TextField
                        value={formData.last_name}
                        className='field'
                        name="last_name"
                        onChange={handleFormChange}
                        color="warning"
                        error={formData.last_name && !lastNameState.state ? true : false}
                        id="outlined-error"
                        label="Last name"
                        helperText={formData.last_name && lastNameState.message}
                    /> */}
                    <TextField
                        value={formData.phone_no}
                        className='field'
                        name="phone_no"
                        onChange={handleFormChange}
                        color='warning'
                        error={formData.phone_no && !phoneNumberState.state ? true : false}
                        id="outlined-error"
                        label="Phone number"
                        helperText={formData.phone_no && phoneNumberState.message}
                    />

                    {/* <TextField
                        name="city"
                        onChange={handleFormChange}
                        error={false}
                        id="outlined-error"
                        label="City"
                        helperText={`${!false ? 'Please check your name' : ''}`}
                    /> */}
                    <TextField
                        value={formData.email}
                        className='field'
                        name="email"
                        onChange={handleFormChange}
                        color='warning'
                        error={formData.email && !emailState.state ? true : false}
                        id="outlined-error"
                        label="Email"
                        helperText={formData.email && emailState.message}

                    />

                    {/* <FormControl sx={{ m: 1, minWidth: 120 }}
                        className='field'
                    >
                        <InputLabel id="demo-simple-select-standard-label" color='warning'>Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={formData.gender}
                            onChange={handleGenderChange}
                            color='warning'
                            label="Gender"
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                            <MenuItem value="custom">Custom</MenuItem>
                        </Select>
                    </FormControl> */}
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Date of Birth"
                        className='field'
                        slotProps={{
                            textField: ({ position }) => ({
                                color: 'warning',
                            }),
                        }}
                        name="date_of_birth"
                        onChange={handleDatePickerChange} />
                    </LocalizationProvider> */}


                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" color={password && passWordState.health != 100 ? "error" : 'warning'}
                        className='field'
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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

                        {password && passWordState.errors && (
                            <FormHelperText error={true}>{
                                passWordState.errors.map((value, index) => (
                                    <div key={index}>

                                        <Typography variant="body2">{value}</Typography>
                                    </div>
                                ))
                            }</FormHelperText>
                        )}

                    </FormControl>

                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" color='warning' className='field'>
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            value={formData.password}
                            name="password"
                            onChange={handleFormChange}
                            id="outlined-adornment-password"
                            type='password'
                            endAdornment={
                                <InputAdornment position="end">
                                    {/* <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {<VisibilityOff />}
                                    </IconButton> */}
                                </InputAdornment>
                            }
                            label="Confirm Password"
                        />
                        <FormHelperText error={true}>
                            {formData.password && formData.password !== password && (
                                "Password doesn't match"
                            )}
                        </FormHelperText>
                    </FormControl>
                </div>
                <Button variant="outlined" color="warning" className='signup-btn' onClick={signup}>Sign up</Button>
            </Box>

        </section>
    )
}

export default Form