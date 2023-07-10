import React from 'react';
import './minuteArrow.less'


const MinuteArrow = () => {

    const time = new Date()

    return (
        <div className='minuteArrowContainer' style={{transform: 'rotateZ(' + (time.getMinutes() * 6) + 'deg)'}}>
            <div className='minuteArrow'></div>
        </div>
    );
};

export default MinuteArrow;