import React from 'react';
import './analogClock.less'
import HourArrow from "../Arrows/HourArrow/HourArrow";
import MinuteArrow from "../Arrows/MinuteArrow/MinuteArrow";
import SecondArrow from "../Arrows/SecondArrow/SecondArrow";
import {useDispatch, useSelector} from "react-redux";
import {setNewTime} from "../../../redux/reducers/timezonesReducer";


const AnalogClock = (props) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setNewTime())
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