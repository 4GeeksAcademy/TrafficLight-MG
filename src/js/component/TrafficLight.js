import React, { useState } from 'react';

const TrafficLight = () => {
    const [light, setLight] = useState('red');

    // Setea el color al tocar el que se quiere    
    const setRedLight = () => setLight('red');
    const setYellowLight = () => setLight('yellow');
    const setGreenLight = () => setLight('green');

    //Setea el color recorriendo los colores
    const changeLight = () => {
        if (light === 'red') {
            setLight('yellow');
        } else if (light === 'yellow') {
            setLight('green');
        } else {
            setLight('red');
        }
    };

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='traffic-light'>
                <div
                    className={`light red ${light === 'red' ? 'active' : ''}`}
                    onClick={setRedLight}
                ></div>
                <div
                    className={`light yellow ${light === 'yellow' ? 'active' : ''}`}
                    onClick={setYellowLight}
                ></div>
                <div
                    className={`light green ${light === 'green' ? 'active' : ''}`}
                    onClick={setGreenLight}
                ></div>
                <button className='btn btn-secondary' onClick={() => { changeLight() }}> Change light </button>
            </div>
        </div>
    );
};

export default TrafficLight;