import React from 'react';
import Card from "@mui/material/Card";
import {Avatar, CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from '../../styles/account.module.scss'

const UserLiked = () => {
    return (
        <Card sx={{ width: 360}} className={styles.userLiked}>
            <CardActionArea style={{backgroundColor: "#E0D2F9"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Понравившиеся
                    </Typography>
                    <div className="folder1" style={{width: "120px", height: "120px", backgroundColor: "darkblue", borderRadius: "20px"}}>

                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserLiked;