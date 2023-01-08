import {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {Carousel} from "antd";
import styles from '../../styles/main/drawerMain.module.scss'
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DescriptionIcon from '@mui/icons-material/Description';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import userCart from "../../store/global/userCart";
import Link from "next/link"
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Image from "next/image";

export default function TemporaryDrawer({imgSrc, data}) {
    const closeBtn = {
        width: "40px",
        height: "40px",
        margin: '0'
    }
    const [state, setState] = useState({
        bottom: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            className={styles.drawerBlock}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <IconButton
                aria-label="delete"
                sx={closeBtn}
                onClick={toggleDrawer(anchor, false)}>
                <HighlightOffIcon/>
            </IconButton>
            <div className={styles.imageBlock}>
                {
                    data.images.length !== 1
                        ? <Carousel
                            className={styles.carousel}
                            dotPosition="left"
                            autoplay
                        >
                            {
                                data.images.map((e) => (
                                    <div key={e}>
                                        <img
                                            src={e}
                                            alt="img"
                                            height="400px"
                                        />
                                    </div>
                                ))
                            }
                        </Carousel>
                        : <img src={data.images[0]} alt=""/>
                }
            </div>
            <div className={styles.descriptionBlock}>
                <div className={styles.titleBlock}>
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.brand}>{data.brand}</p>
                </div>
                <div className={styles.listDescription}>
                    <p>
                        <Chip
                            icon={<CategoryIcon/>}
                            label={<b>Category</b>}
                            variant="outlined"
                        /> {data.category}
                    </p>
                    <p>
                        <Chip
                            icon={<LocalOfferIcon/>}
                            label={<b>Discount</b>}
                            variant="outlined"
                        /> {data.discountPercentage} %
                    </p>
                    <p>
                        <Chip
                            icon={<StarIcon/>}
                            label={<b>Rating</b>}
                            variant="outlined"
                        /> {data.rating}
                    </p>
                    <p>
                        <Chip
                            icon={<Inventory2Icon/>}
                            label={<b>Stock</b>}
                            variant="outlined"
                        /> {data.stock}
                    </p>
                    <p>
                        <Chip
                            icon={<DescriptionIcon/>}
                            label={<b>Description</b>}
                            variant="outlined"
                        /> {data.description}
                    </p>
                </div>
            </div>
            <div className={styles.selectBtns}>
                {/*//обавить цену большим шрифтом + кнопки покупки и в корзину + в левом верхнем углу сделать иконку ESC*/}
                <p className={styles.price}>{data.price} €</p>
                <div className={styles.btnBlock}>
                    <Button
                        startIcon={data.title === "iPhone 9"
                            ? <RemoveShoppingCartIcon/>
                            : userCart.idSelectedProducts.includes(data.id)
                                ? <ShoppingCartCheckoutIcon/>
                                : <AddShoppingCartIcon/>}
                        variant="contained"
                        className={styles.addToCartBtn}
                        disabled={data.title === "iPhone 9" || userCart.idSelectedProducts.includes(data.id) || userCart.idNowBuyProduct.includes(data.id)}
                        onClick={() => {
                            userCart.addUserSelectedProducts(data)
                        }}
                    >
                        Add to cart
                    </Button>
                    <Link href="/paymentCart">
                        <Button
                            startIcon={<LocalMallIcon/>}
                            color="success"
                            variant="contained"
                            className={styles.buyNowBtn}
                            disabled={data.title === "iPhone 9" || userCart.idNowBuyProduct.includes(data.id)}
                            onClick={() => {
                                userCart.addNowBuyProduct(data)
                            }}
                        >
                            Buy product now
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>

    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <>
                    <img
                        style={{cursor: "pointer"}}
                        src={imgSrc}
                        onClick={toggleDrawer(anchor, true)}
                        alt="img"
                        draggable={false}
                    />
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </>
            ))}
        </div>
    );
}