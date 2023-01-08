import React from 'react';
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '../../styles/account.module.scss'
import userData from "../../store/global/userData";
import FactoryAccountState from "../../store/userAccount/FactoryAccountState";

const UserAccountData = () => {
    const {email, username} = userData.data
    return (
        <Card className={styles.userBalance} onClick={() => FactoryAccountState.create('addAccountData')}>
            <CardActionArea sx={{backgroundColor: "#A6D2E3"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Your account data
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <b>Email</b> - {email}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <b>Nickname</b> - {username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserAccountData;