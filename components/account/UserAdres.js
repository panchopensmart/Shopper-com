import React from 'react';
import {CardActionArea} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import styles from '../../styles/account.module.scss'

const UserAdres = ({address}) => {
    return (
        <Card className={styles.userPersonalSale}>
            <CardActionArea style={{backgroundColor: "#C2CEFA"}}>
                <CardContent>
                    {
                        address.state
                            && <img src="https://avatars.mds.yandex.net/i?id=cc6e5a1a5db773edfc8d330d906f6115_l-5265152-images-thumbs&n=13"
                                    alt="USA"
                                    style={{width: "100px", borderRadius: "10px"}}
                                />
                    }
                    <Typography gutterBottom variant="h5" component="div">
                        {address.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Address</b> - {address.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserAdres;