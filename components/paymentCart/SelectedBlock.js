import React, {useState} from 'react';
import styles from './../../styles/productCart/collectCart.module.scss'
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import {Chip, Tooltip} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import userCart from "../../store/global/userCart";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";

const SelectedBlock = observer(({data, flagBuyNow}) => {
    let [count, setCount] = useState(1)
        return (
            <div className={styles.selectedCard}>
                <div className={styles.titleBlock}>
                    <p className={styles.title}>{data.title.length > 19 ? data.title.substring(0, 30) + "..." : data.title}</p>

                </div>
                {
                    flagBuyNow
                    && <Tooltip title={<b>Please remove the selected product from the cart
                        if you are not going to purchase this product.
                        Otherwise, you will not be able to use the service
                        *Сlick on the field to continue</b>}
                                placement="right"
                                sx={{cursor: 'pointer'}}
                    >
                        <Chip color="error" size="small" icon={<ErrorIcon/>} label="Attention"/>
                    </Tooltip>
                }
                <div className={styles.imgBlock}>
                    <img src="" alt="img"/>
                </div>
                <div className={styles.priceBlock}>
                    <div className={styles.bottomBlock}>
                        <p className={styles.totalPrice}>{data.price * count} €</p>
                    </div>
                    <IconButton sx={{width: "40px", height: "40px"}}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={styles.counter}>
                    <ButtonGroup size="small" variant="contained">
                        <Button color="info" onClick={() => count > 1 ? setCount(count - 1) : count}><RemoveCircleIcon/></Button>
                        <Button color="info" onClick={() => setCount(count + 1)}><AddCircleIcon/></Button>
                    </ButtonGroup>
                    <Badge color="info" badgeContent={count}
                           showZero={true}
                    >
                        <ShoppingCartIcon/>
                    </Badge>
                </div>
            </div>
        );
    }
)

export default SelectedBlock;