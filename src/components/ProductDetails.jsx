import "./style.scss"
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import products from "../redux/slices/products";

function ProductDetails({ prodctData }) {
    const [qty, setQty] = React.useState('');

    const handleChange = (event) => {
        setQty(event.target.value);
    };

    const addToCart = (id) => {
        console.log(id)
    }

    return (
        <div className="product-details">
            <h1>{prodctData && prodctData.title}</h1>
            <h3>By <span>Fasion</span></h3>
            <div className="pricing">
                <div className='child-1'>
                    <span>$</span>{prodctData && prodctData.price}
                </div>
                <div className="child-2">
                    <span>
                        Save 25%
                    </span>
                    <span>
                        Inclusive deal off the day
                    </span>
                </div>
            </div>
            <p className="description">
                {prodctData && prodctData.description}
            </p>
            <div className="add-to-cart">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        className="qty"
                        value={qty}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        color='warning'
                    >
                        <MenuItem value="">
                            Qty
                        </MenuItem>
                        <MenuItem value={1}>one</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' className="add-to-cart-btn" onClick={() => addToCart(prodctData && prodctData.productId)}>
                    <ShoppingCartIcon className="icon" />  Add to Cart
                </Button>
            </div>
            <div className="profile-id">
                <AccountCircleIcon />
                <div>
                    <div>
                        <p>
                            Sharjeel Hussain
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid id eos facilis maiores laborum eaque voluptas, ullam non fugit.
                        </p>
                    </div>
                    <div>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails