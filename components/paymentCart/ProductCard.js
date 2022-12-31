import React, {useEffect} from 'react';
import styles from "../../styles/productCart/productCart.module.scss";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import {BiRightArrow} from "react-icons/bi"
import allProducts from "../../store/global/allProducts";
import {observer} from "mobx-react-lite";
import userCart from "../../store/global/userCart";

const ProductCard = ({eventData}) => {
    return (
        <div className={styles.productCard}>
                    <div className={styles.imgCard}>
                        {!eventData.images
                            ? "No image :("
                            : <img src={eventData.images[3]} alt=""/>}

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
                            <ButtonGroup variant="contained" aria-label="outlined primary button group" color="success">
                                <Button
                                    onClick={() => userCart.deleteProductInPaymentCart(eventData)}
                                    startIcon={<DeleteIcon/>}
                                    sx={{height: "40px"}}
                                    color="error"
                                >
                                    Удалить из заказа
                                </Button>
                                <Button
                                    onClick={() => userCart.addProductInPaymentCart(eventData)}
                                    endIcon={<BiRightArrow/>}
                                    sx={{height: "40px"}}
                                    color="success"
                                >
                                    Добавить в заказ
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
        </div>
    );
}


export default ProductCard;