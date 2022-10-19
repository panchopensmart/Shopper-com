import React from 'react';
import styles from '/styles/account.module.scss'
import UserAccount from '../components/account/UserAccount'
import UserDelivery from "../components/account/UserDelivery";
import UserSale from "../components/account/UserSale";
import UserBalance from "../components/account/UserBalance";
import UserPays from "../components/account/UserPays";
import UserLiked from "../components/account/UserLiked";
//TODO оформить карточки разными цветами и сделать так чтобы они переносились на 1 строку по блоку при адаптиве
const Account = () => {
    return (
        <div className={styles.account} >
            <div className={styles.userNameCard}>
                <UserAccount/>
            </div>
            <div className={styles.userDelivery}>
                <UserDelivery/>
            </div>
            <div className={styles.userPersonalSale}>
                <UserSale/>
            </div>
            <div className={styles.userBalance}>
                <UserBalance/>
            </div>
            <div className={styles.userLiked}>
                <UserLiked/>
            </div>
            <div className={styles.userPays}>
                <UserPays/>
            </div>
        </div>
    );
};

export default Account;