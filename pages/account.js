import React, {useEffect, useState} from 'react';
import styles from '/styles/account.module.scss'
import UserAccount from '../components/account/UserAccount'
import UserPayment from "../components/account/UserPayment";
import UserAddres from "../components/account/UserAddres";
import UserPassword from "../components/account/UserPassword";

import UserOtherData from "../components/account/UserOtherData";
import Chip from '@mui/material/Chip';
import MouseIcon from '@mui/icons-material/Mouse';
//TODO сделать все компоненты с несколькими размерами текста (к примеру во всём прложении используется только 4 типа текста)
//TODO оформить карточки разными цветами и сделать так чтобы они переносились на 1 строку по блоку при адаптиве
const Account = () => {
    const [data, setData] = useState({
        error: null,
        isLoaded: false,
        items: []
    })
    const ID = 15 //TODO получить в пропсе айдишник пользователя с сервера
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${ID}`)
            .then(res => res.json())
            .then(userInfo => setData({
                isLoaded: true,
                items: userInfo
            }))
            .catch((e) => setData({
                    ...data,
                    error: e.message
                })
            );
    }, [])
    return (
        <div className={styles.pageApp}>
            {data.isLoaded
                ? <>
                    <div className={styles.menu}>
                        <div className={styles.userNameCard}>
                            <UserAccount firstname={data.items.firstName} lastname={data.items.lastName}/>
                        </div>

                        <div className={styles.userDelivery}>
                            <UserPayment cardData={data.items.bank}/>
                        </div>

                        <div className={styles.userPersonalSale}>
                            <UserAddres address={data.items.address}/>
                        </div>

                        <div className={styles.userBalance}>
                            <UserPassword email={data.items.email} username={data.items.username}/>
                        </div>

                        <div className={styles.userLiked}>
                            <UserOtherData ein={data.items.ein} ssn={data.items.ssn}/>
                        </div>

                    </div>
                    <div className={styles.descriptionBlock}>
                        <Chip size="small" icon={<MouseIcon/>} label="Кликните слева по плитке..." variant="outlined"
                              style={{width: "250px", fontWeight: "bold"}}/>
                    </div>
                </>
                : <p style={{alignItems: "center"}}>Please reload this page.<br/>
                    *Reason problem - <span style={{color: "red"}}>{data.error}</span></p>
            }
        </div>
    );
};

export default Account;