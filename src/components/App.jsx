import React from 'react';
import './app.less'
import Main from "./Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {getTimezones} from "../redux/actions/timezones";
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
            setClock((prev) => [...prev, 1])
            :
            setClock((prev) => [...prev, prev.at(-1)+1])
    };

    return (
        <div className={'app-wrapper'}>
            {
                !isFetching
                ?
                    <div>
                        <button onClick={addClock} className={'addClockBtn'}>Добавить часы</button>
                        <div className={'app-container'}>
                            {clock.map((item) => {
                                return(
                                    <Main key={item} timezones={timezones}/>
                                )
                            })}
                        </div>
                    </div>
                :
                    <Fetching />
            }
        </div>
    );
};

export default App;