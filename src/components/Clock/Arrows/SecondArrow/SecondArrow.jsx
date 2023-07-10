import React from 'react';
import './secondArrow.less'
import {useSelector} from "react-redux";


const SecondArrow = () => {

    const time = useSelector(state => state.timezones.time)

    return (
        <div className='secondArrowContainer' style={{transform: 'rotateZ(' + (time.getSeconds() * 6) + 'deg)'}}>
            <div className='secondArrow'></div>
        </div>
    );
};

export default SecondArrow;