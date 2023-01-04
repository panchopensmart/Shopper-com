import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';
import styles from '../../../styles/main/ProductCard/mainCard.module.scss'
import FactoryIconsChip from "../FactoryIconsChip";
import IconButton from "@mui/material/IconButton";
import {BsFillCartPlusFill, BsFillCartXFill, BsCartCheckFill} from 'react-icons/bs'
import DrawerMain from '../DrawerMain'
import userCart from "../../../store/global/userCart";
import {observer} from "mobx-react-lite";
import {Stack} from "@mui/material";
import {BsQuestionCircle} from 'react-icons/bs'
import {Tooltip} from "antd";
import Link from "next/link";

const CardItem = observer(
    ({dataCard}) => {

        function setSelected() {
            setIsSelected(!isSelected)
        }

        const [isSelected, setIsSelected] = useState(false)
        const blockedTitle = dataCard.title === "iPhone 9"//товар IPhone 9 заблокирован из за некорректности api сервиса

        return (
            <div>
                <div className={styles.headCard}>
                    <p>{dataCard.brand}</p>
                </div>
                <div className={styles.imgBlock}>
                    <DrawerMain
                        setSelected={setSelected}
                        isSelected={isSelected}
                        imgSrc={dataCard.thumbnail}
                        data={dataCard}
                    />
                </div>
                <br/>
                <div className={styles.chipsBlock}>
                    <div className={styles.leftChips}>
                        <Chip icon={<StarIcon/>}
                              label={dataCard.rating}
                              variant="filled"
                              color={Math.round(dataCard.rating) > 4 ? "success" : "warning"}
                        />
                        <Chip sx={{paddingX: "10px"}}
                              icon={<FactoryIconsChip naming={dataCard.category}/>}
                              label={dataCard.category} variant="outlined"
                        />

                        <IconButton
                            disabled={blockedTitle === true || userCart.idSelectedProducts.includes(dataCard.id) || userCart.idNowBuyProduct.includes(dataCard.id)}
                            onClick={() => {
                                userCart.addUserSelectedProducts(dataCard)
                            }}
                        >
                            {blockedTitle || userCart.idNowBuyProduct.includes(dataCard.id)
                                ? <BsFillCartXFill/>
                                : userCart.idSelectedProducts.includes(dataCard.id)
                                    ? <BsCartCheckFill/>
                                    : <BsFillCartPlusFill/>
                            }
                        </IconButton>
                        {
                            userCart.idNowBuyProduct.includes(dataCard.id)
                            && <Link href="/paymentCart">
                                <Tooltip title="the product is waiting for payment. Click for continue">
                                    <IconButton>
                                        <BsQuestionCircle/>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        }
                    </div>
                    <div className={styles.rightChip}>
                        <Chip
                            sx={{paddingX: "10px", height: "40px"}}
                            variant="filled"
                            label={<p style={{fontSize: "40px", fontWeight: "bold"}}>{dataCard.price} €</p>}
                        />
                    </div>
                </div>
                <div className={styles.descriptionBlock}>
                    <p class={styles.nameProduct}>{dataCard.title}</p>
                    <p>{dataCard.description}</p>
                </div>

            </div>
        );
    }
)

export default CardItem;