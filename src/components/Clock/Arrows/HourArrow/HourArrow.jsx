import React from 'react';
import './hourArrow.less'
import {useSelector} from "react-redux";


const HourArrow = (props) => {

    const time = useSelector(state => state.timezones.time)
    const GMT = Math.abs(time.getTimezoneOffset() / 60)
    const hour = time.getHours() - (GMT - props.gmt) > 0 ? (time.getHours() - (GMT - props.gmt)) : (24 - (GMT - props.gmt))

    return (
        <div className='hourArrowContainer' style={{transform: 'rotateZ(' + ((hour % 12) * 30 + time.getMinutes() * 0.5) +'deg)'}}>
            <div className='hourArrow'></div>
        </div>
    );
};

export default HourArrow;