import React from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import {FaSprayCan} from  'react-icons/fa'
import {MdLocalHospital} from 'react-icons/md'
import {GiCoolSpices} from 'react-icons/gi'
import {BiHomeHeart} from 'react-icons/bi'

const FactoryIconsChip = ({naming}) => {
    switch (naming) {
        case "smartphones":
            return <SmartphoneIcon sx={{ fontSize: 20}}/>
        case "laptops":
            return <LaptopIcon sx={{ fontSize: 20}}/>
        case "fragrances":
            return <FaSprayCan style={{ fontSize: 20}}/>
        case "skincare":
            return <MdLocalHospital style={{ fontSize: 20}}/>
        case "groceries":
            return <GiCoolSpices style={{ fontSize: 20}}/>
        case "home-decoration":
            return <BiHomeHeart style={{ fontSize: 20}}/>
        default:
            break;
    }

};

export default FactoryIconsChip;