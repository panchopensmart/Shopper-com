import React, {useEffect} from 'react';
import styles from '/styles/account.module.scss'
import UserAccount from '../components/account/UserAccount'
import UserPayment from "../components/account/UserPayment";
import UserAddress from "../components/account/UserAddress";
import UserPassword from "../components/account/UserPassword";
import UserOtherData from "../components/account/UserOtherData";
import Chip from '@mui/material/Chip';
import MouseIcon from '@mui/icons-material/Mouse';
import userdata from "../store/global/userData";
//TODO сделать все компоненты с несколькими размерами текста (к примеру во всём прложении используется только 4 типа текста)
//TODO оформить карточки разными цветами и сделать так чтобы они переносились на 1 строку по блоку при адаптиве
const Account = () => {
    useEffect(() => {
        userdata.fetchUserData()
    }, [])
    return (
        <div className={styles.pageApp}>
            {!userdata.error
                && <>
                    <div className={styles.menu}>
                        <div className={styles.userNameCard}>
                            <UserAccount/>
                        </div>

                        <div className={styles.userDelivery}>
                            <UserPayment />
                        </div>

                        <div className={styles.userPersonalSale}>
                            <UserAddress/>
                        </div>

                        <div className={styles.userBalance}>
                            <UserPassword email={userdata.data.email} username={userdata.data.username}/>
                        </div>

                        <div className={styles.userLiked}>
                            <UserOtherData ein={userdata.data.ein} ssn={userdata.data.ssn}/>
                        </div>

                    </div>
                    <div className={styles.descriptionBlock}>
                        <Chip size="small" icon={<MouseIcon/>} label="Кликните слева по плитке..." variant="outlined"
                              style={{width: "250px", fontWeight: "bold"}}/>
                    </div>

                </>
            }
        </div>
    );
};

export default Account;