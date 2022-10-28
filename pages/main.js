import React from 'react';
import ParametersBar from "../components/main/ParametersBar";
import Cards from "../components/main/ProductCard/index";
import Slider from "../components/main/PaginationSlider";


const Main = () => {
    return (
        <div>
            <ParametersBar></ParametersBar>
            <Cards></Cards>
            <Slider/>
        </div>
    );
};

export default Main;