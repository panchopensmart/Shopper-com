import styles from './../../styles/productCart/collectCart.module.scss'
import BlockSelectedProduct from "./BlockSelectedProduct";
import BlockCountPrice from "./BlockCountPrice";
import {observer} from "mobx-react-lite";

const CollectCart = observer(() => {

    return (
        <div className={styles.collectCart}>
            <BlockSelectedProduct/>
            <BlockCountPrice/>
        </div>
    );
}
)

export default CollectCart;