import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {HiMenu} from 'react-icons/hi'
import Button from '@mui/material/Button';
import Link from "next/link";

const SideBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                onClick={handleClick}
                startIcon={<HiMenu/>}
                variant="contained"
                color="primary"
                style={{
                    fontWeight: "bold"
                }}
            >
                Меню
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href="/main"><MenuItem onClick={handleClose}>Главная</MenuItem></Link>
                <Link href="/account"><MenuItem onClick={handleClose}>Личный кабинет</MenuItem></Link>
                <Link href="/paymentCart"><MenuItem onClick={handleClose}>Корзина</MenuItem></Link>
                <Link href="/delivery"><MenuItem onClick={handleClose}>Заказы</MenuItem></Link>
                <Link href="/signin"><MenuItem onClick={handleClose}>Выход</MenuItem></Link>

            </Menu>
        </div>
    );
};

export default SideBar;



