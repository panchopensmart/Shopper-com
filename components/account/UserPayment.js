import React from 'react';
import { CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '../../styles/account.module.scss'

const UserPayment = ({cardData}) => {
    return (
            <Card className={styles.userDelivery}>
                <CardActionArea style={{backgroundColor: "#B8A6E3"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Payment Card
                        </Typography>
                        <br />
                        <Typography variant="h6" color="text.secondary">
                            <b>Card number</b> - {"..." + cardData?.cardNumber.slice(12, 16)}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            <b>Currency</b> - {cardData.currency}
                        </Typography>
                        <Typography variant="body2" style={{color: "#94E388", border: "2px solid #94E388", borderRadius: "5px", width: "60px", fontWeight: "bold", marginTop: "10px"}}>
                            {cardData.cardExpire}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    );
};

export default UserPayment;