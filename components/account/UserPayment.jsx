import React from 'react';
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '../../styles/account.module.scss'
import userdata from "../../store/global/userdata";
import FactoryAccountState from "../../store/userAccount/FactoryAccountState";

const UserPayment = () => {
    const {bank} = userdata.data

    return (
        <Card className={styles.userDelivery} onClick={() => FactoryAccountState.create('paymentCard')}>
            <CardActionArea style={{backgroundColor: "#B8A6E3"}}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        Payment Card
                    </Typography>
                    <br/>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                    >
                        <b>Card number</b> - {"..." + bank.cardNumber.slice(12, 16)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        <b>Currency</b> - {bank.currency}
                    </Typography>
                    <Typography variant="body2" style={{
                        color: "#94E388",
                        border: "2px solid #94E388",
                        borderRadius: "5px",
                        width: "41px",
                        fontWeight: "bold",
                        marginTop: "10px"
                    }}>
                        {bank.cardExpire}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
};

export default UserPayment;