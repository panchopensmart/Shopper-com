import React from 'react';
import Card from "@mui/material/Card";
import {Avatar, CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from '../../styles/account.module.scss'

const UserPays = () => {
    return (
        <Card sx={{ width: 360}} className={styles.userPays}>
            <CardActionArea style={{backgroundColor: "#F9E8BD"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Чеки
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Посмотреть чеки оплаты
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserPays;