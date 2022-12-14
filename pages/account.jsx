import React, {useEffect} from 'react';
import styles from '/styles/account.module.scss'
import UserAccount from '../components/account/UserAccount'
import UserPayment from "../components/account/UserPayment";
import UserAccountData from "../components/account/UserAccountData";
import UserOtherData from "../components/account/UserOtherData";
import userdata from "../store/global/userData";
import {observer} from "mobx-react-lite";
import HandleRenderInfo from "../components/account/HandleRenderInfo";
//TODO сделать все компоненты с несколькими размерами текста (к примеру во всём прложении используется только 4 типа текста)
//TODO оформить карточки разными цветами и сделать так чтобы они переносились на 1 строку по блоку при адаптиве
const Account =  observer(() => {
    useEffect(() => {
        userdata.fetchUserData()
    }, [])

    return (
        <div className={styles.pageApp}>
            {
                userdata.error
                && <p>Произошла ошибка при загрузке</p>
            }
            {userdata.isLoaded
                ? <>
                    <div className={styles.menu}>
                        <div className={styles.userNameCard}>
                            <UserAccount/>
                        </div>

                        <div className={styles.userDelivery}>
                            <UserPayment/>
                        </div>

                        <div className={styles.userBalance}>
                            <UserAccountData/>
                        </div>

                        <div className={styles.userLiked}>
                            <UserOtherData/>
                        </div>
                    </div>
                    <HandleRenderInfo/>
                </>
                : <p>Загрузка...</p>
            }
        </div>
    );
}
)
export default Account;