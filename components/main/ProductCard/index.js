import React, {useState} from 'react';
import {TiChevronRightOutline} from 'react-icons/ti';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import styles from '../../../styles/main/ProductCard/productCard.module.scss'
import CardItem from "./Card";


const CARDS = 10
const MAX_VISIBILITY = 3
    //TODO сделать другие стрелки
const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    const classesLeftBtn = `nav left`
    const classesRightBtn = `nav left`
        //TODO сделать чтобы скролл выполнялся при прокрутке колеса мыши и стрелками на клавиатуре (вправо - влево)
    return (
        <div className={styles.carousel}>
            {active > 0 && <button className={styles.navLeft} onClick={() => setActive(i => i - 1)} ><FaChevronCircleLeft style={{width: "50px"}}/></button>}
            {React.Children.map(children, (child, i) => (
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
            {active < count - 1 && <button className={styles.navRight} onClick={() => setActive(i => i + 1)}><FaChevronCircleRight style={{width: "50px"}}/></button>}
        </div>
    );
};
    //TODO сделать чтобы кнопки были как на Озон (стрелки в кружке, при наведении менялись на контрастный цвет)
 const Cards = () => (
    <div className='Cards'>
        <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
                <CardItem title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
            ))}
        </Carousel>
    </div>
);

 export default Cards;
