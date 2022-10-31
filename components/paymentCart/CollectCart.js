import React from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import BlockSelectedProduct from "./BlockSelectedProduct";
import BlockCountPrice from "./BlockCountPrice";

const CollectCart = () => {
    return (
        <div className={styles.collectCart}>
            <BlockSelectedProduct/>
            
            <BlockCountPrice/>
        </div>
    );
};

export default CollectCart;