import Item from './Item/Item'
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

/* ------------- Mock async Service -------------------  */
import products from '../Data/products';

function getItems() {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
    return promesa;
}

function getItemsByCategory(categoryURL) {
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            const filtro = products.filter(
                (Item) => Item.category === categoryURL
            );
            resolve(filtro);
        }, 500);
    });
    return promesa;
}

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
        if (categoryid === undefined) {
            getItems().then((respuesta) => {
                setProducts(respuesta);
            });
        } else {
            getItemsByCategory(categoryid).then((respuesta) =>
                setProducts(respuesta)
            );
        }
    }, [categoryid]);

    return (
        <Container maxWidth="lg" sx={{ pt: 2 }}> 
            <Box>
                <Grid container spacing={2}>
                    {products.map((product) => {
                        return (
                            <Grid item xs={12} sm={4} md={4} lg={3} key={product.id}>
                                <Item
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    category={product.category}
                                    img={product.img}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Container>
    );
}

export default ItemListContainer