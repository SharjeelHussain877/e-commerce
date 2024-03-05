import './style.scss';
import React from 'react'
import { ContactCard, Footer, PageHeader, ContactForm, Loader, Navbar } from '../components';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';

const text = {
    heading: 'Contact us',
    subText: 'Ask any question or remarks? Just write us a message!'
}

function Contact() {
    return (
        <section className='contact'>
            <Navbar />
            <PageHeader text={text} />
            <Container sx={{ margin: "20px auto" }} maxWidth="lg" className='contact-sec'>
                <Grid container >
                    <Grid item xs={12} md={5}>
                        <ContactCard />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </section >
    )
}

export default Contact