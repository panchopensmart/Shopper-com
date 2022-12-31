import React, {useState} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import Button from "@mui/material/Button";
import {SnackbarProvider, useSnackbar} from 'notistack';

function SnackApp() {
    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Sorry, payment is not working at this time!', {variant});
    };

    return (
        <div className={styles.blockCountPrice}>
            <Button onClick={handleClickVariant('error')} variant="contained" color="success">pay for cart</Button>
        </div>
    );
}

export default function BlockCountPrice() {
    return (
        <SnackbarProvider maxSnack={3}>
            <SnackApp/>
        </SnackbarProvider>
    );
}