import Box from '@mui/material/Box';
import styles from '../../../styles/main/ParametersBar/parametersBar.module.scss'
import { Input } from 'antd';
const { Search } = Input;

const ParametersBar = () => {;
    return (
            <Box className={styles.ParametersBar}>
                <div>
                    <Search placeholder="Find a product..."></Search>
                </div>
            </Box>
    )

};

export default ParametersBar;