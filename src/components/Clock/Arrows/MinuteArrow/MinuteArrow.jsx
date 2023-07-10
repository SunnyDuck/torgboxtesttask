import React from 'react';
import './minuteArrow.less'
import {useSelector} from "react-redux";


const MinuteArrow = () => {

    const time = useSelector(state => state.timezones.time)

    return (
        <div className='minuteArrowContainer' style={{transform: 'rotateZ(' + (time.getMinutes() * 6) + 'deg)'}}>
            <div className='minuteArrow'></div>
        </div>
    );
};

export default MinuteArrow;