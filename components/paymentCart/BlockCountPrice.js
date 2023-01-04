import React, {useEffect, useState} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import Button from "@mui/material/Button";
import {SnackbarProvider, useSnackbar} from 'notistack';
import userCart from "../../store/global/userCart";
import cartTotalPrice from '../../store/cartTotalPrice'
import {observer} from "mobx-react-lite";

const SnackApp = observer(() => {
    const {enqueueSnackbar} = useSnackbar();

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Sorry, payment is not working at this time!', {variant});
    };
    let {nowBuyProduct, userPaymentCart, userSelectedProducts} = userCart //TODO проверить если корзина пустая, то заблокировать кнопку pay

    return (
        <div className={styles.blockCountPrice}>
            <p>{
                cartTotalPrice.PriceInCards
                    ? cartTotalPrice.PriceInCards.reduce((a,b)=> a + b, 0)
                    : 0
            }</p>
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
})


export default function BlockCountPrice() {
    return (
        <SnackbarProvider maxSnack={3}>
            <SnackApp/>
        </SnackbarProvider>
    );
}