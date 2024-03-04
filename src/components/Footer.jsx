import './style.scss'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Footer() {
    return (
        <footer className='footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={4} className='section-one'>
                        <Typography variant='h4'>Fashion</Typography>
                        <Typography variant='body2'>Complete your style with awesome clothes from us.</Typography>
                        <Item className='icons'>
                            <NavLink to='https://www.instagram.com/sharjeelhussain877/'>
                                <InstagramIcon />
                            </NavLink>
                            <NavLink to='https://www.facebook.com/profile.php?id=61551475233524'>
                                <FacebookOutlinedIcon />
                            </NavLink>
                            <NavLink to='https://twitter.com/ShrjilHussain'>
                                <XIcon />
                            </NavLink>
                            <NavLink to='https://www.linkedin.com/in/sharjeelhussain877/'>
                                <LinkedInIcon />
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2} className='section-two'>
                        <Typography variant='h5'>Company</Typography>
                        <Item>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Contact us
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Support
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Career
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className='section-three'>
                        <Typography variant='h5'>Quick Link</Typography>
                        <Item>
                            <NavLink>
                                Share Location
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Order Tracking
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Size Guide
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                FAQs
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className='section-four'>
                        <Typography variant='h5'>Legal</Typography>
                        <Item>
                            <NavLink>
                                Terms & Conditions
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink>
                                Privacy Policy
                            </NavLink>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </footer>
    )
}

export default Footer