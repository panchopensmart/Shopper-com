import React from 'react';
import styles from '../styles/delivery/delivery.module.scss'
import Box from "@mui/material/Box";
import PackageCard from "../components/delivery/PackageCard";
//TODO сделать пункт какая будет погода иконкой во время доставки (react-icons Weather icons)
//TODO при первом подключении первый раз подсказками пользователю показать как в ручную переключать корусель
const Delivery = () => {
    return (
        <PackageCard></PackageCard>
    );
};

export default Delivery;