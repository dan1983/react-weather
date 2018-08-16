import React from 'react';
import PropTypes from 'prop-types';
import WetherData from './../WeatherLocation/WeatherData/index'; 

const ForecastItem = ({weekday,data,hour})=>{

    return <div>
               <div>{weekday} { hour}</div>
               <WetherData data={data} />
           </div>

}
ForecastItem.prototype ={
    weekday:PropTypes.string.isRequired,


}

export default ForecastItem;