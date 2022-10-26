import React from 'react';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
const CardItem = ({title, content}) => {
    return (
        <div className='card'>
            {/*ToDO сделать поля:
                Иконка "добавить в понравившиеся"
                Картинка + чип с качеством
                Название
                Цена
                Описание
                Аккаунт продавца (но это в крайнюю очередь)
                Из каких городов доступно
                Кнопки В корзину и Купить
                Расчет доставки
            */}

            <h2>{title}</h2>
            <p>{content}</p>
            <Chip icon={<FaceIcon />} label="With Icon" variant="outlined"/>
            <Chip icon={<FaceIcon />} label="With Icon" variant="outlined"/>
            <Chip icon={<FaceIcon />} label="With Icon" variant="outlined"/>
        </div>
    );
};

export default CardItem;