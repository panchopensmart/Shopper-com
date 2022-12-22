import React, {useEffect, useState} from 'react';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import styles from '../../../styles/main/ProductCard/productCard.module.scss'
import CardItem from "./Card";


const CARDS = 3
const MAX_VISIBILITY = 3
const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
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
 const Cards = () => {
     const [products, setProducts] = useState({
         error: null,
         isLoaded: false,
         items: []
     })
     useEffect(()=>{
         fetch('https://dummyjson.com/products')
             .then(res => res.json())
             .then((data) => {
                 setProducts({
                     isLoaded: true,
                     items: data.products
                 })},
                     () => {
                         setProducts({
                             isLoaded: false,
                             error: 'Error in query, please reload page',
                         });
                     }
             );
         console.log(products.error)
     }, [])
     return (
         <div className='Cards'>
             {
                 products.isLoaded
                     ? <Carousel>
                         {[...new Array(products.items.length)].map((_, i) => (
                             <CardItem data = {products.items[i]} title={'Card ' + (i + 1)} />
                         ))}
                        </Carousel>
                     : <h3  style={{color:'red'}}>{products.error}</h3> //TODO сделать прогресс лоадер кольца и если через 15 скунд не подгрузилось, то вывести ошмбку
             }
         </div>
     )
 }

 export default Cards;
