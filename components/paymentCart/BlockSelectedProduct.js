import React from 'react';
import SelectedBlock from "./SelectedBlock";
import styles from './../../styles/productCart/collectCart.module.scss'
const BlockSelectedProduct = () => {
    //TODO сделать чтобы если блок первый в списке, то закруглить края чтобы блок вставал в поле
    return (
        <div className={styles.fieldSelectedCards}>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
            <SelectedBlock></SelectedBlock>
        </div>
    );
};

export default BlockSelectedProduct;