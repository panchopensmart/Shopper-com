import React, {useEffect} from 'react';
import ParametersBar from "../components/main/ParametersBar";
import Cards from "../components/main/ProductCard/ProductCard";
import Registration from "./Registration";
import allProducts from "../store/global/allProducts";
import {observer} from "mobx-react-lite";

const Main = observer(() => {
    useEffect(() => allProducts.fetchAllProducts(), [])

    return (
        <div>
            {/*//TODO пофиксить оптимтзацию карусели, при увеличении масштаба замедляется эффект  (проблема в анимации, она слишком долгая )*/}
            <ParametersBar></ParametersBar>
            <Cards></Cards>
        </div>
    );
}
)

export default Main;