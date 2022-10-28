import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {Typography} from "@mui/material";


const PaginationSlider = () => {
    return (
        <Box width={300} sx={{margin: "0 auto"}}>
            <Typography>Перейти на карточку:</Typography>
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
};

export default PaginationSlider;