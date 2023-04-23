import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ItemCounter from "./ItemCount";
import Grid from '@mui/material/Grid';

export default function ItemDetail(props) {
    const product = {
        id: props.id,
        name: props.title,
        price: props.price,
        image: props.img,
    };

    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <Grid container>
                    <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            sx={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            image={props.img}
                            alt="producto"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.title}
                                <br />
                                {props.price}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {props.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.detail}
                            </Typography>
                            <ItemCounter product={product} />
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}
