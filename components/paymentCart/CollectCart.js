import React from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import SelectedProduct from "./SelectedProduct";
import CountPrice from "./CountPrice";

const CollectCart = () => {
    return (
        <div className={styles.collectCart}>
            <SelectedProduct/>
            <CountPrice/>
        </div>
    );
};

export default CollectCart;