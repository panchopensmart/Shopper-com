import React from 'react';
import Card from "@mui/material/Card";
import {Avatar, CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserLiked = () => {
    return (
        <Card sx={{ minWidth: 600}}>
            <CardActionArea>
                <Avatar>N</Avatar>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Liked 500
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

export default UserLiked;