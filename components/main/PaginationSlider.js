import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const PaginationSlider = () => {
    return (
        <Box width={300} sx={{margin: "0 auto"}}>
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
};

export default PaginationSlider;