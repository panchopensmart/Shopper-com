import {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import style from "../styles/header/Header.module.scss"
import {useSession} from "next-auth/react";

export default function SearchAppBar() {
    const [anchorEl, setAnchorEl] = useState(null)
    const {data: session} = useSession()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{height: "64px"}}>
                <Toolbar>
                    {
                        session
                        && <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{mr: 2}}
                                onClick={handleClick}
                            >
                                <MenuIcon/>
                            </IconButton>
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
                                <Link href="/signin"><MenuItem onClick={handleClose}>Выход</MenuItem></Link>

                            </Menu>
                        </>
                    }
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        <p className={style.logoHeader}>Shopper.com</p>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}