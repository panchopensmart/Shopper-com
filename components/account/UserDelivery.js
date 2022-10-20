import React from 'react';
import { CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const UserDelivery = () => {
    return (
            <Card sx={{ width: 360}} style={{borderRadius: "30px"}}>
                <CardActionArea style={{backgroundColor: "#B8A6E3"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Доставка
                        </Typography>
                        <br />
                        <Typography variant="h6" color="text.secondary">
                            Ближайшая доставка ожидается:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            (Город Москва, Улица Ленина, дом-6, к 1)
                        </Typography>
                        <Typography variant="body2" style={{color: "#94E388", border: "2px solid #94E388", borderRadius: "5px", width: "62px", fontWeight: "bold", marginTop: "10px"}}>
                            24.22.12
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    );
};

export default UserDelivery;