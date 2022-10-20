import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Avatar, CardActionArea} from '@mui/material';
import {MdOutlineSwitchAccount} from 'react-icons/md'

export default function ActionAreaCard() {
    return (
        <Card sx={{ width: 360}} style={{borderRadius: "30px"}}>
            <CardActionArea style={{backgroundColor: "#F0ADFF"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/backgroundImageCard.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Полупанов Александр
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}