import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import styles from '../../styles/account.module.scss'
import userData from "../../store/global/userData";

export default function ActionAreaCard() {
    const {firstName, lastName} = userData.data
    return (
        <Card className={styles.userNameCard}>
            <CardActionArea style={{backgroundColor: "#F0ADFF"}}>
                <CardMedia draggable="false"
                           component="img"
                           height="140"
                           image="/backgroundImageCard.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName} {lastName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}