import React, {useState} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import Button from "@mui/material/Button";
import {SnackbarProvider, useSnackbar} from 'notistack';
import userCart from "../../store/global/userCart";

function SnackApp() {
    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Sorry, payment is not working at this time!', {variant});
    };
    let {nowBuyProduct, userPaymentCart, userSelectedProducts} = userCart //TODO проверить если корзина пустая, то заблокировать кнопку pay

    return (
        <div className={styles.blockCountPrice}>
            <Button
                onClick={handleClickVariant('error')}
                variant="contained"
                color="success"
                disabled={false}
            >
                pay for cart
            </Button>
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