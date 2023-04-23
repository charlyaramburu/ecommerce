import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const { state } = useLocation();
    const { customerData, cart } = state || { customerData: {}, cart: [] };
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    return (
        <Container sx={{ paddingTop: '32px' }}>
            <Typography variant="h4" component="h2" mb={3}>
                ¡Gracias por tu compra!
            </Typography>
            <Typography variant="h6" component="h3">
                Información del cliente:
            </Typography>
            <Box mb={3}>
                <Typography>Nombre: {customerData.name}</Typography>
                <Typography>Correo electrónico: {customerData.email}</Typography>
                <Typography>Teléfono: {customerData.phone}</Typography>
                <Typography>Dirección: {customerData.address}</Typography>
            </Box>
            <Typography variant="h6" component="h3">
                Detalles de la compra:
            </Typography>
            <Box mb={3}>
                {cart.map((item) => (
                    <Box key={item.id}>
                        <Typography>
                            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price} MXN
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Button variant="contained" color="primary" onClick={handleContinueShopping}>
                Continuar Comprando
            </Button>
        </Container>
    );
};

export default ThankYou;
