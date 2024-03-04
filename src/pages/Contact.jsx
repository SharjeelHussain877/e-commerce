import './style.scss';
import React from 'react'
import { ContactCard, Footer, PageHeader, ContactForm, Loader, Navbar } from '../components';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const text = {
    heading: 'Contact us',
    subText: 'Ask any question or remarks? Just write us a message!'
}

function Contact() {
    const isLoading = useSelector((state) => state.isLoading);
    console.log(isLoading)
    return (
        <section className='contact'>
            {
                isLoading ? (
                        <Loader />
                ) : (
                    <>
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
                    </>
                )
            }
        </section>
    )
}

export default Contact