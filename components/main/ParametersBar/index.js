import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from '../../../styles/main/ParametersBar/parametersBar.module.scss'
import {FormControl, FormControlLabel, FormHelperText, InputLabel, Select, Switch} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
const Index = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    //TODO сделать чтобы при изменении 1 из параметров перерендрился весь список товаров соответствующий условию
    // и сделать чтобы при нажатии кнопки были активные и меняли цвет
    return (
            <Box className={styles.ParametersBar} >
                <ButtonGroup variant="outlined" aria-label="outlined primary button group" size="small" sx={{m: 3}} color="inherit">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <Box sx={{ minWidth: 120 }} >
                    <FormControl sx={{ m: 2, minWidth: 120}} >
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{height: 25}}
                        >
                            <MenuItem value="">
                                <em>Все</em>
                            </MenuItem>
                            <MenuItem value={10}>Кроссовки</MenuItem>
                            <MenuItem value={20}>Пуховики</MenuItem>
                            <MenuItem value={30}>Рюкзаки</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControlLabel sx={{color: "black", m: 2}} control={<Switch defaultChecked size="small" />} label="Бесплатная доставка" />
                </Box>
            </Box>
    )

};

export default Index;