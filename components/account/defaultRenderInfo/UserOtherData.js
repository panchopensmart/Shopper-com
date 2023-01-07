import React from 'react';
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from '../../../styles/account.module.scss'
import userData from "../../../store/global/userData";
import FactoryAccountState from "../../../store/userAccount/FactoryAccountState";

const UserOtherData = () => {
    const {ein, ssn} = userData.data
    return (
        <Card className={styles.userLiked} onClick={() => FactoryAccountState.create('addOtherData')}>
            <CardActionArea style={{backgroundColor: "#E0D2F9"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Other
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>EIN</b> - {ein}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>SSN</b> - {ssn}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserOtherData;