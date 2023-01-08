import React from 'react';
import SelectedBlock from "./SelectedBlock";
import styles from './../../styles/productCart/collectCart.module.scss'
import userCart from "../../store/global/userCart";
import Notifications from "../../store/Notifications";
import {observer} from "mobx-react-lite";
import {Chip} from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const BlockSelectedProduct = observer(() => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    //TODO реализовать чтобы в корзине уже были только уникальные товары

    const noProductsChip = {
        paddingLeft: "5px",
        color: "white",
        margin: "0 auto"
    }
    return (
        <div className={styles.fieldSelectedCards}>
            {(
                <>
                    {
                        userCart.nowBuyProduct.length
                            ?
                            <div className={styles.nowByProductBlock}>
                                <div className={styles.descriptionBlock}>
                                    <Chip label="Please pay for product now"></Chip>
                                </div>
                                <div className={styles.innerNowByProductBlock}>
                                    {userCart.nowBuyProduct.map((e) => (
                                        <SelectedBlock key={e.id} data={e} flagBuyNow={Notifications.MessageByProductNow}/>
                                    ))}
                                </div>
                            </div>
                            : <>
                                {''}
                                {Notifications.MessageByProductNow = false}
                            </>

                    }


                    {userCart.userSelectedProducts.length
                        ?
                        <>
                            {userCart.userSelectedProducts.map((e) => (
                                <>
                                    <SelectedBlock data={e}/>
                                </>
                            ))}
                        </>
                        : ''

                    }
                    {
                        !userCart.nowBuyProduct.length && !userCart.userSelectedProducts.length
                        && <Chip sx={noProductsChip}
                                 label="No products in cart"
                        />
                    }


                </>
            )
            }
        </div>
    );
})

export default BlockSelectedProduct;