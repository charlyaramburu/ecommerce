import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useCart } from './Item/ItemCountContext';
import { Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeItem, updateItemQuantity, clearCart } = useCart();
    const subtotals = cart.map((item) => item.quantity * item.price);
    const grandTotal = subtotals.reduce((total, subtotal) => total + subtotal, 0);
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cart.length === 0) {
        return (
            <Container sx={{ paddingTop: '32px' }}>
            <Typography variant="h4" component="h2">
                Tu carrito está vacío.
            </Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h2" mb={2}>
                        Tu carrito:
                    </Typography>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="span">
                            Producto
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" component="span">
                            Cantidad
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" component="span">
                            Precio
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" component="span">
                            Subtotal
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" component="span">
                            Eliminar
                        </Typography>
                    </Grid>
                </Grid>
                {cart.map((item) => (
                    <Grid container key={item.id} item xs={12} spacing={2} alignItems="center">
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    width="64"
                                    height="64"
                                    style={{ marginRight: '16px' }}
                                />
                                <Typography variant="subtitle1" component="span">
                                    {item.name}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label="#"
                                type="number"
                                value={item.quantity}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    min: 1,
                                }}
                                onChange={(e) => updateItemQuantity(item.id, Number(e.target.value))}
                                sx={{ width: '64px' }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" component="span">
                                ${item.price} MXN
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="subtitle1" component="span">
                                ${isNaN(Number(item.quantity)) || isNaN(Number(item.price)) ? "N/A" : (Number(item.quantity) * Number(item.price))} MXN
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={() => removeItem(item.id)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                ))}
                <Grid container item xs={12} spacing={2} alignItems="center">
                    <Grid item xs={10} sx={{ textAlign: 'right' }}>
                        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                            Total:
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                            ${grandTotal} MXN
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                    <Button variant="contained" color="primary" onClick={clearCart} sx={{ mt: 2 }}>
                        Vaciar Carrito
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCheckout}
                        sx={{ ml: 2, mt: 2 }}
                    >
                        Finalizar Compra
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cart;
