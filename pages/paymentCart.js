import React from 'react';
import styles from '../styles/productCart/productCart.module.scss'
import ProductCard from "../components/paymentCart/ProductCard";
import CollectCart from "../components/paymentCart/CollectCart";
//TODO В мобильной версии сделать чтобы при выборе товара кидались отметки к иконке (Badge MUI)
//TODO реализовать несколько корзин, при добавлении товара в корзину должен быть выбор в какую карзину добавить товар
const PaymentCart = () => {
    return (
        <div className={styles.mainBlock}>
            <div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div>
                <CollectCart/>
            </div>
        </div>
    );
};

export default PaymentCart;