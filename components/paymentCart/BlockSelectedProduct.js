import React from 'react';
import SelectedBlock from "./SelectedBlock";
import styles from './../../styles/productCart/collectCart.module.scss'
import userCart from "../../store/global/userCart";
import ProductCard from "./ProductCard";
import Notifications from "../../store/Notifications";

const BlockSelectedProduct = () => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    //TODO реализовать чтобы в корзине уже были только уникальные товары
    return (
        <div className={styles.fieldSelectedCards}>
            {(
                <>
                    {
                        Notifications.MessageByProductNow
                        && <div className={styles.nowByProductBlock}>
                            <p>Please pay for product now</p>
                            <div className={styles.innerNowByProductBlock}>
                                {userCart.nowBuyProduct.map((e) => (
                                    <SelectedBlock data={e} flagBuyNow={Notifications.MessageByProductNow}/>
                                ))}
                            </div>

                        </div>
                    }
                    {
                        userCart.userSelectedProducts.map((e) => (
                            <SelectedBlock data={e}/>
                        ))
                    }
                </>
            )
            }
        </div>
    );
};

export default BlockSelectedProduct;