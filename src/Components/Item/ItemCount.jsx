import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useCart } from './ItemCountContext';


const ItemCounter = ({ product }) => {
    const [count, setCount] = useState(0);
    const { addItem } = useCart();

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        if (count > 0) {
            addItem(product, count);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#28a8e0',
                        '&:hover': {
                            backgroundColor: '#28a8e0',
                        },
                    }}
                    onClick={handleDecrement}
                >
                    <RemoveIcon />
                </Button>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ mx: 2 }}
                >
                    {count}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#28a8e0',
                        '&:hover': {
                            backgroundColor: '#28a8e0',
                        },
                    }}
                    onClick={handleIncrement}
                >
                    <AddIcon />
                </Button>
            </Box>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                sx={{
                    backgroundColor: '#28a8e0',
                    '&:hover': {
                        backgroundColor: '#28a8e0',
                    },
                }}
                onClick={handleAddToCart}
            >
                Agregar al carrito
            </Button>
        </Box>
    );
};

export default ItemCounter;
