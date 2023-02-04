import React, { useEffect } from 'react'

import Products from './Products';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getProductsitems } from './redux/productsSlice'
import { Grid } from '@mui/material';

function MyApp(props)
{

    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProductsitems()) }, []);
    return (
        <>
            <Grid container lg={12} style={{}}>

                <Grid item lg={12} >
                    <Header></Header>
                </Grid>
            </Grid>
            <Grid container lg={12} style={{ padding: 40 }}>

                <Grid item lg={12}>
                    <Products></Products></Grid>
            </Grid>
        </>
    );
}

export default MyApp;
