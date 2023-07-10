import React from 'react';
import './analogClock.less'
import HourArrow from "../Arrows/HourArrow/HourArrow";
import MinuteArrow from "../Arrows/MinuteArrow/MinuteArrow";
import SecondArrow from "../Arrows/SecondArrow/SecondArrow";


const AnalogClock = (props) => {


    const [time, setTime] = React.useState(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            setTime(now)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='clock'>
            <div className='clockCenter'></div>
            <HourArrow gmt = {props.gmt}/>
            <MinuteArrow />
            <SecondArrow />
            <span className='number number-1'>|</span>
            <span className='number number-2'>|</span>
            <span className='number number-3'>|</span>
            <span className='number number-4'>|</span>
            <span className='number number-5'>|</span>
            <span className='number number-6'>|</span>
            <span className='number number-7'>|</span>
            <span className='number number-8'>|</span>
            <span className='number number-9'>|</span>
            <span className='number number-10'>|</span>
            <span className='number number-11'>|</span>
            <span className='number number-12'>|</span>
        </div>
    );
};

export default AnalogClock;