import React from 'react';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import styles from '../../../styles/main/ProductCard/mainCard.module.scss'
import FactoryIconsChip from "../FactoryIconsChip";
import {Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {BsFillHeartFill} from "react-icons/bs"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import {BsFillCartPlusFill, BsFillCartXFill, BsCartCheckFill} from 'react-icons/bs'

import {BiPackage} from 'react-icons/bi'

const CardItem = ({dataCard}) => {
    const blockedTitle = dataCard.title === "iPhone 9"//товар IPhone 9 заблокирован из за некорректности api сервиса

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
                <p>{dataCard.brand}</p>
            </div>
            <div className={styles.imgBlock}>
                <img src={dataCard.thumbnail} alt=""/>
            </div>
            <br/>
            <div className={styles.chipsBlock}>
                <div className={styles.leftChips}>
                    <Chip  icon={<StarIcon/>} label={dataCard.rating} variant="filled" color={Math.round(dataCard.rating) > 4 ? "success" : "warning" }/>
                    <Chip sx={{paddingX: "10px"}} icon={<FactoryIconsChip naming={dataCard.category}/>} label={dataCard.category} variant="outlined"/>
                    <Tooltip title="add in my cart" placement="right" >
                        <IconButton disabled={blockedTitle}>
                            {blockedTitle
                                ? <BsFillCartXFill/>
                                : <BsFillCartPlusFill/>
                            }
                            {
                                // TODO при клике поменять иконку на которая с галочкой, а если кликнуть которая с галочкой получить с плюсиком (реализовать с помощью дополнительной переменной со значением true / false)
                            }
                        </IconButton>
                    </Tooltip>
                </div>
                <div className={styles.rightChip}>
                    <Chip sx={{paddingX: "10px", height: "40px"}} variant="filled" label={<p style={{fontSize: "40px", fontWeight: "bold"}}>{dataCard.price} €</p>}/>
                    <Tooltip describeChild title="Buy the product now">
                        <Button sx={{height: "40px"}}
                                disabled={blockedTitle}
                                variant={"contained"} color={Math.round(dataCard.rating) > 4 ? "success" : "warning" }
                        >
                            {<BiPackage style={{fontSize: "27px"}}/>}
                        </Button>
                    </Tooltip>
                </div>

            </div>
            <div className={styles.descriptionBlock}>
                <p class={styles.nameProduct}>{dataCard.title}</p>
                <p>{dataCard.description}</p>
            </div>

        </div>
    );
};

export default CardItem;