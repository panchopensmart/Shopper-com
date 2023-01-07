import React from 'react';
import SelectedBlock from "./SelectedBlock";
import styles from './../../styles/productCart/collectCart.module.scss'
import userCart from "../../store/global/userCart";
import ProductCard from "./ProductCard";
import Notifications from "../../store/Notifications";
import {observer} from "mobx-react-lite";
import {Chip} from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import cartTotalPrice from "../../store/cartTotalPrice";

const BlockSelectedProduct = observer(() => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    //TODO реализовать чтобы в корзине уже были только уникальные товары
    return (
        <div className={styles.fieldSelectedCards}>
            {(
                <>
                    {
                        userCart.nowBuyProduct.length
                            ?
                                <div className={styles.nowByProductBlock}>
                                    <p>Please pay for product now</p>
                                    <div className={styles.innerNowByProductBlock}>
                                        {userCart.nowBuyProduct.map((e) => (
                                            <SelectedBlock data={e} flagBuyNow={Notifications.MessageByProductNow}/>
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
                        && <Chip sx={{paddingLeft: "5px"}} icon={<WarningAmberIcon color="secondary"/>}
                                 label="No products in cart"/>
                    }


                </>
            )
            }
        </div>
    );
})

export default BlockSelectedProduct;