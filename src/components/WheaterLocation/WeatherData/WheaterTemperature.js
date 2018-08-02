import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const getWheaterIcon =(weatherState)=>{
    var wheater;
    switch( weatherState ){
        case "cloud":
            wheater="cloud"
            break;
        default:
            wheater="day-sunny"
    }
    return wheater;
}


const WheaterTemperature = ({temperature,weatherState}) => {
    return <div>
    
    <WeatherIcons name={getWheaterIcon(weatherState)} size="2x"/>
   <span>{` ${temperature} c`}</span>
   </div>
};
WheaterTemperature.propTypes={
    temperature: PropTypes.number.isRequired,
    weatherState:PropTypes.string
}

export default WheaterTemperature;