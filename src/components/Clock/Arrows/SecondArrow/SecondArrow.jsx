import React from 'react';
import './secondArrow.less'


const SecondArrow = () => {

    const time = new Date()

    return (
        <div className='secondArrowContainer' style={{transform: 'rotateZ(' + (time.getSeconds() * 6) + 'deg)'}}>
            <div className='secondArrow'></div>
        </div>
    );
};

export default SecondArrow;