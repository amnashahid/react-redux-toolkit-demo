

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Rating } from '@mui/material';
import { Grid } from '@mui/material';
import { increment } from './redux/cartSlice';
import Skeleton from '@mui/material/Skeleton';


function Products(props)
{

    const dispatch = useDispatch();
    const { items, loading } = useSelector((store) => store.items)
    return (

        <Grid container>
            {loading ?
                <>
                    <Grid item lg={3}>
                        <Skeleton variant="rectangular" width={345} height={300} />
                    </Grid>
                    <Grid item lg={3}>
                        <Skeleton variant="rectangular" width={345} height={300} />
                    </Grid>
                    <Grid item lg={3}>
                        <Skeleton variant="rectangular" width={345} height={300} />
                    </Grid>
                    <Grid item lg={3}>
                        <Skeleton variant="rectangular" width={345} height={300} />
                    </Grid> </> :
                items.map((item) =>

                    <Grid item lg={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={item.rating.rate}
                                    />
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary">
                                        $ {item.price}
                                    </Typography>
                                    <Button variant="contained" onClick={() => dispatch(increment(item))}>Add To Cart</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card></Grid>
                )}
        </Grid>
    );
}

export default Products;