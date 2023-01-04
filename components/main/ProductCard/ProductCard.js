import{Children, useEffect, useState} from 'react';

import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import styles from '../../../styles/main/ProductCard/mainCard.module.scss'
import CardItem from "./Card";
import allProducts from "../../../store/global/allProducts";

let MAX_VISIBILITY = 3

const Carousel = ({children}) => {
    useEffect(() => {
        const availableScreenWidth = window.screen.availWidth
        const availableScreenHeight = window.screen.availHeight
        if (availableScreenWidth < 1280 || availableScreenHeight < 700){
            MAX_VISIBILITY = 1 //Оптимизация анимации на экранах с маленьким разрешением
        }
    }, [])
    const [active, setActive] = useState(2);
    const count = Children.count(children);
    //TODO сделать чтобы скролл выполнялся при прокрутке колеса мыши и стрелками на клавиатуре (вправо - влево)
    return (
        <div className={styles.carousel}>
            {active > 0 && <button className={styles.navLeft} onClick={() => setActive(i => i - 1)}><FaChevronCircleLeft
                style={{color: 'blue', width: "50px"}}/></button>}
            {Children.map(children, (child, i) => (
                <div className={styles.cardContainer} style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': Math.sign(active - i),
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                    'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                }}>
                    {child}
                </div>
            ))}
            {active < count - 1 &&
                <button className={styles.navRight} onClick={() => setActive(i => i + 1)}><FaChevronCircleRight
                    style={{color: 'blue',width: "50px"}}/></button>}
        </div>
    );
};
//TODO сделать чтобы кнопки были как на Озон (стрелки в кружке, при наведении менялись на контрастный цвет)
const Cards = () => {
    return (
        <div className='Cards'>
            <Carousel>
                {allProducts.data.map((dataCard) => (
                    <CardItem dataCard={dataCard}/>
                ))}
            </Carousel>
        </div>
    )
}

export default Cards;
