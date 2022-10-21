import React from 'react';
import {PaletteTree} from './palette';
import Delivery from "../pages/delivery";
import Confirm from "../pages/confirm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Delivery">
                <Delivery/>
            </ComponentPreview>
            <ComponentPreview path="/Confirm">
                <Confirm/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;