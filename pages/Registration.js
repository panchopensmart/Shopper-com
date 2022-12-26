import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import userdata from "../store/global/userData";
import allProducts from "../store/global/allProducts";


const Registration = observer(() => {

    return (
        <div>
            {allProducts.data.map((e)=> (
                <div>{e.title}</div>
            ))}
            <p>qwqwqw</p>
        </div>
    );
})

export default Registration;