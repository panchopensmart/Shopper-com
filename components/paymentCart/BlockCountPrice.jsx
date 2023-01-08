import {useEffect} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import Button from "@mui/material/Button";
import {SnackbarProvider, useSnackbar} from 'notistack';
import cartTotalPrice from '../../store/cartTotalPrice'
import {observer} from "mobx-react-lite";

const SnackApp = observer(() => {
    const {enqueueSnackbar} = useSnackbar();

    const blockCountPrice = {
        marginRight: "90px",
        fontSize: "25px",
        fontWeight: "bold",
        color: "wheat"
    }

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Sorry, payment is not working at this time!', {variant});
    };

    useEffect(() => {
        cartTotalPrice.countCartPrice()
    }, [])

    return (
        <div className={styles.blockCountPrice}>
            <p style={blockCountPrice}>{
                cartTotalPrice.totalCartPrice
            } (euro)</p>
            <Button
                onClick={handleClickVariant('error')}
                variant="contained"
                color="success"
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