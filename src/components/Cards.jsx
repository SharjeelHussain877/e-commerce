import './style.scss'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cards({ products }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='cards'>
      {products.length != 0 ? (
        <>
          {products.slice(0, 3).map(v => (
            <Card key={v.productId} sx={{ maxWidth: 280 }} data-aos="zoom-out" className='card'>
              <CardMedia
                className='image'
                component="img"
                height="300"
                image={v.image}
                alt="Product img"
              />
              <CardContent>
                <div className="title-section">
                  <Typography className='title'>
                    {v.title}
                  </Typography>
                  <Typography variant="h6" className='icon'>
                    <TrendingFlatIcon />
                  </Typography>
                </div>
                <Typography variant="body1" color="text.secondary" className='slogan'>
                  Explore now!
                </Typography>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (

        <div className='update-message' data-aos="zoom-in">
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              Sorry, We're currently updating our product inventory.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Please check back later.
            </Typography>
          </CardContent>
        </div>

      )

      }

    </div>
  );
}