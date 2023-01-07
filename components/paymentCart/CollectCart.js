import React, {useEffect} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import BlockSelectedProduct from "./BlockSelectedProduct";
import BlockCountPrice from "./BlockCountPrice";
import {observer} from "mobx-react-lite";
import cartTotalPrice from "../../store/cartTotalPrice";

const CollectCart = observer(() => {

    return (
        <div className={styles.collectCart}>
            <BlockSelectedProduct/>
            <BlockCountPrice/>
        </div>
    );
}
)

export default CollectCart;