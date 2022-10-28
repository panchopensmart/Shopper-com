import React from 'react';
import styles from "../../styles/productCart/productCart.module.scss";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import {BiRightArrow} from "react-icons/bi"
import IconButton from "@mui/material/IconButton";
import {RiInformationFill} from 'react-icons/ri'

const ProductCard = () => {

    return (
        <div className={styles.productCard}>
            <div className={styles.imgCard}></div>
            <div className={styles.twoThirdPart}>
                <div className={styles.descriptionBlock}>
                    <Typography variant="body1" className={styles.mainText}>Стол Кухонный</Typography>
                    <Typography variant="body1">Артикул №4689</Typography>
                    <div>
                        <Typography variant="body1">На складе в:</Typography>
                    </div>
                </div>
                <div className={styles.btnGroupBlock} >
                    <IconButton aria-label="delete">
                        <RiInformationFill />
                    </IconButton>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" color="success" >
                        <Button startIcon={<DeleteIcon/>} sx={{height: "40px"}} color="error">Удалить из заказа</Button>
                        <Button endIcon={<BiRightArrow/>} sx={{height: "40px"}} color="success">Добавить в заказ</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;