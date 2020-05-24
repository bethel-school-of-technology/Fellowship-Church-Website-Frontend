import React from 'react';
import sliderArr from '../screens/Ministry';

function ImgComp({ src }) {
    let imgStyles = { 
        width: 100 + "%", 
        height: "auto" 
    };
    return <img src={sliderArr} alt="slide-img" style={imgStyles}/>


}

export default ImgComp;