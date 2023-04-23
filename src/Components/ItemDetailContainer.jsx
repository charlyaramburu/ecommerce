import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Box } from "@mui/material";
import ItemDetail from "./Item/ItemDetail";

/* ------------- Mock async Service -------------------  */
import products from '../Data/products';

function getSingleItem(idURL) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemRequested = products.find((item) => {
                return item.id === parseInt(idURL);
            });
            resolve(itemRequested);
        }, 1000);
    });

    return promesa;
}

/* ------------------------------------------------- */

export default function ItemDetailContainer(props) {
    const [product, setProduct] = useState(null);
    let { itemId } = useParams();

    useEffect(() => {
        getSingleItem(itemId).then((respuesta) => {
            setProduct(respuesta);
        });
    }, [itemId]);

    return product ? (
        <Container maxWidth="lg" sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
            <Box>
            <ItemDetail key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                detail={product.detail}
                category={product.category}
                img={product.img}
            />
            </Box>
        </Container>

    ) : null;
    }
