import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities,onSelectedLocation}) => {
    const handlerWeatherLocationClick = (city) => {
        
            onSelectedLocation(city);
    }
    
    const strToComponent = (cities) =>(
        cities.map(city =>{
            return <WeatherLocation key={city} 
                    city={city} 
                    onWeatherLocationClick={()=>handlerWeatherLocationClick(city)}
                    >
                    </WeatherLocation>})
    
    );
    return  <div>{strToComponent(cities)}</div>
    
};

export default LocationList;