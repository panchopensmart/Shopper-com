import React from 'react';
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '../../styles/account.module.scss'

const UserBalance = () => {
    return (
        <Card className={styles.userBalance}>
            <CardActionArea sx={{backgroundColor: "#A6D2E3"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Баланс
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        0 руб.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserBalance;