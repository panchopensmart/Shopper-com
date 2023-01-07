import React, {useEffect} from 'react';
import ParametersBar from "../components/main/ParametersBar/ParametersBar";
import Cards from "../components/main/ProductCard/ProductCard";
import allProducts from "../store/global/allProducts";
import {observer} from "mobx-react-lite";



const Main = observer(() => {
    useEffect(() => {
        allProducts.fetchAllProducts()
    }, [])

    return (
        <div>
            {
                allProducts.error
                    && <p>Произошла ошибка при загрузке</p>
            }
            {(allProducts.isLoaded)
                ?<>
                    <Cards></Cards>
                </>
                : <p>Загрузка...</p>
            }

        </div>
    );
}
)

export default Main;