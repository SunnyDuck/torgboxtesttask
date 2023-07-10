import React from 'react';
import './app.less'
import Main from "./Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {getTimezones} from "./actions/timezones";
import Fetching from "./Fetching/Fetching";

const App = () => {

    const dispatch = useDispatch()
    const timezones = useSelector(state => state.timezones.items)
    const isFetching = useSelector(state => state.timezones.isFetching)
    const [clock, setClock] = React.useState([1, 2])

    React.useEffect(() => {
        dispatch(getTimezones())
    }, [])

    const addClock = () => {
        clock.length === 0
        ?
            setClock([...clock, 1])
        :
            setClock([...clock, clock[clock.length-1]+1])
    }

    return (
        <div className={'app-wrapper'}>
            {
                isFetching === false
                ?
                    <div className={'app-container'}>
                        <button onClick={() => {addClock()}}>Добавить часы</button>
                        <div></div>
                        {clock.map(() => {
                            return(
                                <Main timezones = {timezones}/>
                            )
                        })}
                    </div>
                :
                    <Fetching />
            }
        </div>
    );
};

export default App;