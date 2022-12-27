import React, {useEffect} from 'react';
import styles from "../../styles/productCart/productCart.module.scss";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import {BiRightArrow} from "react-icons/bi"
import allProducts from "../../store/global/allProducts";
import {observer} from "mobx-react-lite";

const ProductCard = observer(({eventData}) => {
    const productId = eventData.id - 1
    const {title, images} = allProducts.data[`${productId <= 29 ? productId : 0}`]
    return (
        <div className={styles.productCard}>
                    <div className={styles.imgCard}>
                        {title === "iPhone 9"
                            ? "No image :("
                            : <img src={images[0]} alt=""/>}

                    </div>
                    <div className={styles.cardsBlock}>
                        <div className={styles.descriptionBlock}>
                            <Typography variant="body1" className={styles.mainText}>
                                {eventData.title.length > 19 ? eventData.title.substring(0, 30) + "..." : eventData.title}
                            </Typography>
                            <Typography variant="h3" sx={{fontWeight: "bold"}}>{eventData.discountedPrice} €</Typography>
                            <div>
                                <Typography variant="body1">Discount - {Math.floor(eventData.discountPercentage)} %</Typography>
                            </div>
                        </div>
                        <div className={styles.btnGroupBlock}>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small">
                                <Button>-</Button>
                                <input type="text" style={{width: "40px"}} defaultValue={eventData.quantity}/>
                                <Button>+</Button>
                            </ButtonGroup>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" color="success">
                                <Button startIcon={<DeleteIcon/>} sx={{height: "40px"}} color="error">Удалить из заказа</Button>
                                <Button endIcon={<BiRightArrow/>} sx={{height: "40px"}} color="success">Добавить в
                                    заказ</Button>
                            </ButtonGroup>
                        </div>
                    </div>
        </div>
    );
})


export default ProductCard;