import React from 'react';
import './digitalClock.less'

const DigitalClock = (props) => {

    const [time, setTime] = React.useState(new Date())
    const GMT = Math.abs(time.getTimezoneOffset() / 60)

    const hour = time.getHours() - (GMT - props.gmt) > 0 ? (time.getHours() - (GMT - props.gmt)) : (24 - (GMT - props.gmt))

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            setTime(now)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={'digitalClock-wrapper'}>
            <p>{hour/10 >= 1 ? hour : '0' + hour}:
            {time.getMinutes()/10 >= 1 ? time.getMinutes() : '0' + time.getMinutes()}:
                {time.getSeconds()/10 >=1 ? time.getSeconds() : '0' + time.getSeconds()}</p>
        </div>
    );
};

export default DigitalClock;