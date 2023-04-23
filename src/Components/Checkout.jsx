import React, { useState } from 'react';
import { useCart } from './Item/ItemCountContext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [customerData, setCustomerData] = useState({ name: '', email: '', phone: '', address: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate('/thankyou', { state: { customerData, cart } });
        clearCart();
    };

    return (
        <Container sx={{ paddingTop: '32px' }}>
            <Typography variant="h4" component="h2" mb={3}>
                ¡Finaliza tu Compra!
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre Completo"
                            variant="outlined"
                            name="name"
                            value={customerData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            variant="outlined"
                            name="email"
                            value={customerData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Teléfono"
                            variant="outlined"
                            name="phone"
                            value={customerData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Dirección"
                            variant="outlined"
                            name="address"
                            value={customerData.address}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Completar Compra
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Checkout;
