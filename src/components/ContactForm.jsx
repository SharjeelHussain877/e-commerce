import './style.scss'
import * as React from 'react';
import { Container, TextField, Box, Grid, Button, Typography } from '@mui/material';

function ContactForm() {
    return (
        <Container className='contact-form'>
            <Box>
                <Grid container pt={4} spacing={5} className='fields'>
                    <Grid item xs={12} sm={6}>
                        <TextField color='warning' label="Your name" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField color='warning' label="Email" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField color='warning' label="Subject" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            rows={4}
                            color='warning'
                            id="filled-textarea"
                            label="Message"
                            placeholder="Compose your message here to enhance its appeal."
                            multiline
                            variant="filled"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='warning' className='contact-btn'>Submit</Button>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}

export default ContactForm;