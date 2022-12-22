import React from 'react';
import ParametersBar from "../components/main/ParametersBar";
import Cards from "../components/main/ProductCard/index";
import {useDispatch, useSelector} from "react-redux";



const Main = () => {
    const dispatch = useDispatch()
    const decrement = useSelector((state) => state.decrement) //это и есть стор, проблема здесь (по документации)


    let addCount = () => {
        dispatch({type: 'INCREMENT'})
    }

    let removeCount = () => {
        dispatch({type: 'DECREMENT'})
        console.log(decrement)
    }

    return (
        <div>
            <ParametersBar></ParametersBar>
            <Cards></Cards>
            <button onClick={()=>{addCount()}}>add</button>
            <button onClick={()=>{removeCount()}}>remove</button>
            <p>{decrement}</p>
        </div>
    );
};

export default Main;