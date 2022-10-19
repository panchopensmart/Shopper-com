import React from 'react';
import {Avatar, CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const UserBalance = () => {
    return (
        <Card sx={{ minWidth: 500}}>
            <CardActionArea>
                <Avatar>N</Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Balance - 360
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserBalance;