import React from 'react';
import './fetching.less'

const Fetching = () => {
    return (
        <div className={'fetching-wrapper'}>
            <div className={'fetching-container'}></div>
            <div>
                <p>Загрузка данных</p>
                <p>подождите пожалуйста</p>
            </div>
            <div className={'fetching-container'}></div>
        </div>
    );
};

export default Fetching;