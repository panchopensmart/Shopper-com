import React, {useState} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import userCart from "../../store/global/userCart";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";
import cartTotalPrice from '../../store/cartTotalPrice'
import Image from "next/image";

const SelectedBlock = observer(({data, flagBuyNow}) => {
        let [count, setCount] = useState(1)
        const imgProduct = {
            height: "160px",
            maxWidth: "280px",
            borderRadius: "10px",
        }
        const imgBlock = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }

        return (
            <div className={styles.selectedCard}>
                <div className={styles.titleBlock}>
                    <p className={styles.title}>{data.title.length > 19 ? data.title.substring(0, 30) + "..." : data.title}</p>
                </div>
                <div className={styles.imgBlock} style={imgBlock}>

                    {
                        data.thumbnail
                            ? <img src={data.thumbnail} alt="" style={imgProduct}/>
                            : <p>No Image</p>
                    }
                </div>
                <div className={styles.priceBlock}>
                    <div className={styles.bottomBlock}>
                        <p className={styles.totalPrice}>{data.price * count} €</p>
                    </div>
                    <IconButton sx={{width: "40px", height: "40px"}}
                                onClick={() => {
                                    if (flagBuyNow) {
                                        userCart.deleteNowBuyProduct(data)
                                    } else {
                                        userCart.deleteUserSelectedProducts(data)
                                        cartTotalPrice.deleteProductInTotalPrice(data.price)
                                    }
                                }}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={styles.counter}>
                    <ButtonGroup size="small" variant="contained">
                        <Button color="info"
                                onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1)
                                        cartTotalPrice.minusOneProduct(data.price)
                                    } else {
                                        return count
                                    }

                                }} disabled={flagBuyNow}><RemoveCircleIcon/></Button>
                        <Button
                            color="info"
                            onClick={() => {
                                setCount(count + 1)
                                cartTotalPrice.plusOneProduct(data.price)
                            }}
                            disabled={flagBuyNow}><AddCircleIcon/></Button>
                    </ButtonGroup>
                    <Badge
                        color={flagBuyNow ? "error" : 'info'}
                        badgeContent={flagBuyNow ? 0 : count}
                        showZero={true}
                    >
                        <ShoppingCartIcon/>
                    </Badge>
                    {
                        flagBuyNow
                        && <Button variant="contained" disabled>Pay!</Button>
                    }
                </div>
            </div>
        );
    }
)

export default SelectedBlock;