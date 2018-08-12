import React from 'react';
import WheaterTemperature from './WheaterTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import PropTypes from 'prop-types';


const WheaterData = ({data}) => {
    const {temperature,weatherState,humidity,wind} =data;
    return (<div className="WheaterData flex aling-s">
            <WheaterTemperature temperature={temperature} weatherState={weatherState}/>
            <WheaterExtraInfo humidity={humidity} wind={wind}/>
        </div>)
};

WheaterData.propTypes = {
    data: PropTypes.shape ( {
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired ,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,

    }),
};




    



export default WheaterData;


