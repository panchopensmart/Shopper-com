import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import TimeLine from "./TimeLineDelivery";
import {IoMdCheckmark} from "react-icons/io"
import Button from '@mui/material/Button';
import styles from "../../styles/delivery/delivery.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";


//TODO сделать медиа запросами чтобы при адаптиве менялись компоненты
const PackageCard = () => {
    return (
        <Box className={styles.Card}>
            <div>
                {/* TODO отменить начальную анимацию в карусле*/}
                <Carousel sx={{width: 200}} indicators={false} className={styles.carousel}>
                    <Image src="/testImagesCaruselDelivery/JacketAdidas.jpg" width={200} height={200}></Image>
                    <Image src="/testImagesCaruselDelivery/JacketAdidas.jpg" width={200} height={200}></Image>
                    <Image src="/testImagesCaruselDelivery/JacketAdidas.jpg" width={200} height={200}></Image>
                </Carousel>
                <Button sx={{width: 200, marginLeft: "15px", marginTop: "5px", borderRadius: "15px"}} variant="contained" color="success" endIcon={<IoMdCheckmark/>}>Заказ пришел</Button>
            </div>
            <div className={styles.infoBlock}>
                <Typography variant="h4" gutterBottom>Order #4661</Typography>
                <Typography variant="body2" gutterBottom sx={{width: 250}}>
                    Коплект одоставки:<br />
                    <Chip label="Куртка Adidas"></Chip>
                    <Chip label="Куртка Adidas"></Chip>
                    <Chip label="Куртка Adidas"></Chip>

                </Typography>
            </div>
            <TimeLine></TimeLine>
        </Box>
    );
};

export default PackageCard;