import React from 'react';
import './main.less'
import Select from "react-select";
import AnalogClock from "../Clock/AnalogClock/AnalogClock";
import DigitalClock from "../Clock/DigitalClock/DigitalClock";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedTimezone} from "../../reducers/timezonesReducer";

const Main = React.memo((props) => {

    const dispatch = useDispatch()
    const timezones = useSelector(state => state.timezones.items)
    const [timezone, setTimezone] = React.useState(Math.abs(new Date().getTimezoneOffset())/60)
    const [switchSelect, setSwitchSelect] = React.useState(false)
    const [defaultSelectedTimezone, setDefaultSelectedTimezone] = React.useState({});

    React.useEffect(() => {
        timezones.map( (item, index) => {
            if(item.value === ('+' + String(Math.abs(new Date().getTimezoneOffset())/60))){
                setDefaultSelectedTimezone({label: item.label, value: item.value})
                dispatch(setSelectedTimezone(item.value))
                setSwitchSelect(true)
            }
        })
    }, [timezones])

    return (
        <div className={'main'}>
            <AnalogClock gmt = {timezone}/>
            <DigitalClock gmt = {timezone}/>
            {
                switchSelect === true
                ?
                    <Select
                        options={props.timezones}
                        className={'timezoneSelect'}
                        defaultValue = {defaultSelectedTimezone}
                        onChange={(e) => {
                            setTimezone(Number(e.value))
                            dispatch(setSelectedTimezone(Number(e.value)))
                        }
                        }
                    />
                :
                    <div style={{textAlign: "center"}}>Загрузка часового пояса</div>
            }
        </div>
    );
});

export default Main;