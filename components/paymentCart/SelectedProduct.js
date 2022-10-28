import React from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
const SelectedProduct = () => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    return (
        <div className={styles.selectedCard}>
            selected products
        </div>
    );
};

export default SelectedProduct;