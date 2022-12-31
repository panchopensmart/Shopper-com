import Box from '@mui/material/Box';
import styles from '../../../styles/main/ParametersBar/parametersBar.module.scss'
import { Input } from 'antd';
const { Search } = Input;
const ParametersBar = () => {;
    //TODO сделать чтобы при изменении 1 из параметров перерендрился весь список товаров соответствующий условию
    // и сделать чтобы при нажатии кнопки были активные и меняли цвет
    return (
            <Box className={styles.ParametersBar}>
                <div>
                    <Search placeholder="Find a product..."></Search>
                </div>
            </Box>
    )

};

export default ParametersBar;