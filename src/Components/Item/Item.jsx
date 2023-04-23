import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Link } from "react-router-dom";



export default function Item(props) {
    return (
        <Card sx={{ width: 270, minHeight: 500, display: "flex", flexDirection: "column" }}>
            <Link to={`/item/${props.id}`} style={{ textDecoration: "none" }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={props.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                        <br />
                        {props.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions sx={{ marginTop: "auto" }}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Link to={`/item/${props.id}`} style={{ textDecoration: "none" }}>
                <Button size="large">Detalles</Button>
                </Link>
            </CardActions>

        </Card>
    );
}
