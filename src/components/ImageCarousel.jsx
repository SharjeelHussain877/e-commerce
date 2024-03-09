import "./style.scss"


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel({ productData }) {
    const [hoveredImage, setHoveredImage] = React.useState(null);

    const handleMouseMove = (e, index) => {
        setHoveredImage(index);
        const image = e.target;
        const boundingRect = image.getBoundingClientRect();
        const offsetX = e.clientX - boundingRect.left;
        const offsetY = e.clientY - boundingRect.top;
        const width = boundingRect.width;
        const height = boundingRect.height;
        const moveX = (offsetX - width / 2) / 10;
        const moveY = (offsetY - height / 2) / 10;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleMouseLeave = () => {
        const image = document.querySelector('.main-image');
        if (image) {
            image.style.transform = 'translate(0, 0)';
        }
        setHoveredImage(null);
    };

    return (
        <div className='image-carousel'>
            <>
                <Carousel>
                    {
                        productData && productData.map((v, i) => (

                            <div key={i}>
                                <img src={v} className={i === hoveredImage ? 'hovered' : ''}
                                    autoPlay={true}
                                    centerMode={true}
                                    emulateTouch={true}
                                    infiniteLoop={true}
                                    interval={1000}
                                    swipeable={true}
                                    onMouseMove={(e) => handleMouseMove(e, i)}
                                    onMouseLeave={handleMouseLeave} alt='image' />
                            </div>



                        ))
                    }
                </Carousel>
            </>
        </div>
    )
}

export default ImageCarousel