import React from 'react';
import WeatherLocation from './WeatherLocation';



const LocationList = () => {
  return  <div>
        <location city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Buenos Aires,ar'} ></WeatherLocation>
        <WeatherLocation city={'Caracas,ve'} ></WeatherLocation>
   </div>
    
};

export default LocationList;