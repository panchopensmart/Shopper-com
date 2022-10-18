import React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/header/Header.module.scss'
import SideBar from "./SideBar";
const Header = () => {
    //TODO Сделать боковое меню Mui SwipeDrawer при нажати на кнопку Menu
    return (
        <header>
            <div className={styles.head}>
                <SideBar/>
                <p className={styles.logoHeader}>Shopper</p>
                <Button
                    variant="outlined"
                    className={styles.btnEnterAcc}
                >
                    Вход/Регистрация
                </Button>
            </div>
        </header>
    );
};

export default Header;