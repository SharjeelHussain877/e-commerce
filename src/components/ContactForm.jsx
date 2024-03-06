import './style.scss'
import * as React from 'react';
import { Container, TextField, Box, Grid, Button, } from '@mui/material';
import { validateName, validateEmail } from './js/form.js'
import addData from '../firebase/addDataFirestore.js';
import { useDispatch } from 'react-redux';
import { reduxCheckState } from '../redux/slices/isLoading.js';

function ContactForm() {
    const showLoader = useDispatch()

    const [contactDetails, setContactDetails] = React.useState({
        credentialName: '',
        credentialEmail: '',
        credentialSubject: '',
        credentialMessage: '',
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setContactDetails({
            ...contactDetails,
            [name]: value
        });
    };

    const checkName = validateName(contactDetails.credentialName)
    const checkEmail = validateEmail(contactDetails.credentialEmail)

    const sendDataFirebase = async () => {
        const isAllFieldsFilled = Object.values(contactDetails).every(value => value.trim() !== '');
        if (isAllFieldsFilled) {
            showLoader(reduxCheckState())
            const isSubmitted = await addData(contactDetails, "user-contact")
            setContactDetails({
                credentialName: '',
                credentialEmail: '',
                credentialSubject: '',
                credentialMessage: '',
            })
            showLoader(reduxCheckState())
            alert("Thank you for submit your good things!")
        } else {
            alert("Please fill all fields!")
        }
    }
    
    return (
        <Container className='contact-form'>
            <Box>
                <Grid container pt={4} spacing={5} className='fields'>
                    <Grid item xs={12} sm={6}>
                        <TextField onChange={handleFormChange} color='warning'
                            value={contactDetails.credentialName} name='credentialName' label="Your name" variant="standard" helperText={contactDetails.credentialName && !checkName.state ? checkName.message : ""}
                            error={!checkName.state && !!contactDetails.credentialName} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField onChange={handleFormChange} color='warning' value={contactDetails.credentialEmail} name='credentialEmail' label="Email" variant="standard" helperText={contactDetails.credentialEmail && !checkEmail.state ? checkEmail.message : ""}
                            error={!checkEmail.state && !!contactDetails.credentialEmail} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={handleFormChange} color='warning' value={contactDetails.credentialSubject} name='credentialSubject' label="Subject" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={contactDetails.credentialMessage}
                            onChange={handleFormChange}
                            rows={4}
                            color='warning'
                            id="filled-textarea"
                            name='credentialMessage'
                            label="Message"
                            placeholder="Compose your message here to enhance its appeal."
                            multiline
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='warning' className='contact-btn' onClick={sendDataFirebase}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

export default ContactForm;