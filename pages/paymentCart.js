import React, {useEffect} from 'react';
import styles from '../styles/productCart/productCart.module.scss'
import ProductCard from "../components/paymentCart/ProductCard";
import CollectCart from "../components/paymentCart/CollectCart";
import userCart from "../store/global/userCart";
import {observer} from "mobx-react-lite";
import userdata from "../store/global/userData";
//TODO В мобильной версии сделать чтобы при выборе товара кидались отметки к иконке (Badge MUI)
//TODO реализовать несколько корзин, при добавлении товара в корзину должен быть выбор в какую карзину добавить товар
const PaymentCart = observer(() => {

    useEffect(() => {
        if (userCart.data) {
            userCart.fetchUserCart()
        }
    }, [])

    return (
        <div className={styles.mainBlock}>
            {
                userdata.error
                && <p>Произошла ошибка при загрузке</p>
            }
            {userCart.isLoaded
                ? <>
                    <div>
                        {userCart.data.map((e) => (
                            <ProductCard eventData={e}/>
                        ))}
                    </div>
                    <div>
                        <CollectCart/>
                    </div>
                </>
                : <p>Загрузка...</p>
            }
        </div>
    );
})

export default PaymentCart;