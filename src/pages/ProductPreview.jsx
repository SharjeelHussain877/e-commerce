import './style.scss'
import React from 'react'
import { Footer, ImageCarousel, Navbar, ProductDetails } from '../components'
import { Container, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';


function ProductPreview() {
    const product = useSelector((state) => state.savedProducts);
    const { id } = useParams()
    const productId = id.split("").slice(3,).join("")
    const currentProduct = product.find(v => v.productId === productId)
    const images = currentProduct ? [currentProduct.image] : [];
    // let images = ["https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg", "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg", "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

    function handleClick(event) {
        event.preventDefault();
        console.info(event.target);
    }

    return (
        <div className='detail'>
            <Navbar />
            <div role="presentation">
                <Breadcrumbs mb={3} ml={3} aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Products
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center', color: "#f18701" }}
                        color="text.primary"
                    >
                        <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        {currentProduct && currentProduct.title}
                    </Typography>
                </Breadcrumbs>
            </div>
            <Container maxWidth="xl" className='main'>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={5}>
                        <ImageCarousel productData={images} />
                    </Grid>
                    <Grid item sm={12} md={7}>
                        <ProductDetails prodctData={currentProduct} />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default ProductPreview