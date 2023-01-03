import React from 'react';
import SelectedBlock from "./SelectedBlock";
import styles from './../../styles/productCart/collectCart.module.scss'
import userCart from "../../store/global/userCart";

const BlockSelectedProduct = () => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    //TODO реализовать чтобы в корзине уже были только уникальные товары
    return (
        <div className={styles.fieldSelectedCards}>
            {userCart.nowBuyProduct
                    //TODO сделать вывод карточки nowByProduct (при релоаде выаёт ошибку)
                &&(
                    <>
                        {
                            userCart.userPaymentCart.map((e) => (
                                <SelectedBlock data={e}/>
                            ))
                        }
                        {
                            Array.from(userCart.userSelectedProducts, (e) => {
                                return <SelectedBlock data={e}/>
                            } )
                            // userCart.userSelectedProducts.map((e) => (
                            //     <SelectedBlock data={e}/>
                            // ))
                        }
                    </>
                )
            }
        </div>
    );
};

export default BlockSelectedProduct;