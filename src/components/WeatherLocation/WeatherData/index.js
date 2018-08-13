import React from 'react';
import WheaterTemperature from './WheaterTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const WheaterData = ({data}) => {
    const {temperature,weatherState,humidity,wind} =data;
    return (
        <Grid container spacing={24} className="WheaterData">
            <WheaterTemperature temperature={temperature} weatherState={weatherState}/>
            <WheaterExtraInfo humidity={humidity} wind={wind}/>
        </Grid>)
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


