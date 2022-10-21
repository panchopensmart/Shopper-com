import React from 'react';
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const UserSale = () => {
    return (
        <Card sx={{ width: 360 }} style={{borderRadius: "30px"}}>
            <CardActionArea style={{backgroundColor: "#C2CEFA"}}>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                        25%
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                       Персональная скидка
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Данная скидка распространяется на категории:
                    </Typography>
                    <Typography sx={{color: "gray", fontWeight: "bold"}}>
                        (Скидка доступна в течении 24 часов)
                        {//TODO сделать чтобы время менялось после предоставления скидки
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserSale;