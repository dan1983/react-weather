import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

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
    return (
        <Grid item xs={12} sm={4} lg={4} className="WheaterTemperature aling-center-h">
                <WeatherIcons className="clear" name={getWheaterIcon(weatherState)} size="2x"/>
                <span>{` ${temperature} c`}</span>
        </Grid>)
};
WheaterTemperature.propTypes={
    temperature: PropTypes.number.isRequired, 
    weatherState:PropTypes.string
}

export default WheaterTemperature;