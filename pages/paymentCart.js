import React from 'react';
import styles from './../styles/productCart/profuctCart.module.scss'
import ProductCard from "../components/paymentCart/ProductCard";
//TODO реализовать несколько корзин, при добавлении товара в корзину должен быть выбор в какую карзину добавить товар
const PaymentCart = () => {
    return (
        <div>
            <div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PaymentCart;