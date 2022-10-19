import React from 'react';
import styles from '/styles/account.module.scss'
import UserCard from '../components/account/UserCard'
const Account = () => {
    return (
        <div className={styles.account}>
            <div className={styles.userNameCard}>
                <UserCard/>
            </div>
            <div className={styles.userDelivery}>Доставки</div>
            <div className={styles.userPersonalSale}>Скидка покупателя</div>
            <div className={styles.userBalance}>Баланс</div>
            <div className={styles.userPays}>Чеки оплаты</div>
            <div className={styles.userLiked}>Любимые бренды</div>
        </div>
    );
};

export default Account;