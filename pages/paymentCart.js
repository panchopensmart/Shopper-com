import {useEffect, useState} from 'react';
import styles from '../styles/productCart/productCart.module.scss'
import CollectCart from "../components/paymentCart/CollectCart";
import userCart from "../store/global/userCart";
import {observer} from "mobx-react-lite";
import userdata from "../store/global/userData";
import {Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import Notification from "../store/Notifications";

//TODO В мобильной версии сделать чтобы при выборе товара кидались отметки к иконке (Badge MUI)
//TODO реализовать несколько корзин, при добавлении товара в корзину должен быть выбор в какую карзину добавить товар
const PaymentCart = observer(() => {

    useEffect(() => {
        userCart.fetchUserCart()
        userCart.userPaymentCart = []
    }, [])

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={styles.mainBlock}>
            {
                userdata.error
                && <p>Произошла ошибка при загрузке</p>
            }
            {userCart.isLoaded
                ? <>
                    <div>
                        <CollectCart/>
                    </div>
                    {
                        Notification.MessageByProductNow
                        && <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Please, if you do not buy the product, delete it to continue using the service"
                            action={
                                <>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                        <CloseIcon fontSize="small"/>
                                    </IconButton>
                                </>
                            }
                        />

                    }
                </>
                : <p>Загрузка...</p>
            }
        </div>
    );
})

export default PaymentCart;