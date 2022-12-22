import React from 'react';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import styles from '../../../styles/main/ProductCard/productCard.module.scss'
import FactoryIconsChip from "../FactoryIconsChip";
import {Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {BsFillHeartFill} from "react-icons/bs"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {BiPackage} from 'react-icons/bi'
const CardItem = ({data, title, content}) => {
    return (
        <div>
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

            <div className={styles.headCard}>
                <p>{data.brand}</p>
            </div>
            <div className={styles.imgBlock}>
                <img src={data.thumbnail} alt=""/>
            </div>
            <br/>
            <div className={styles.chipsBlock}>
                <div className={styles.leftChips}>
                    <Chip  icon={<StarIcon/>} label={data.rating} variant="filled" color={Math.round(data.rating) > 4 ? "success" : "warning" }/>
                    <Chip sx={{paddingX: "10px"}} icon={<FactoryIconsChip naming={data.category}/>} label={data.category} variant="outlined"/>
                    <Tooltip title="add to Like" placement="right" >
                        <IconButton >
                            <BsFillHeartFill />
                            {
                                // TODO при клике сделать иконку красной
                            }
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={styles.rightChip}>
                    <Tooltip describeChild title="Buy the product now">
                        <Button sx={{height: "40px"}} variant={"contained"} color={Math.round(data.rating) > 4 ? "success" : "warning" }>{<BiPackage style={{fontSize: "27px"}}/>}</Button>
                    </Tooltip>
                    <Chip sx={{paddingX: "10px", height: "40px"}} variant="filled" label={<p style={{fontSize: "40px", fontWeight: "bold"}}>{data.price} €</p>}/>
                </div>

            </div>
            <div className={styles.descriptionBlock}>
                <p class={styles.nameProduct}>{data.title}</p>
                <p>{data.description}</p>
            </div>

        </div>
    );
};

export default CardItem;