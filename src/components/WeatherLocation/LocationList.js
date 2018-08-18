import React from 'react';
import WeatherLocation from './WeatherLocation';
import Grid from '@material-ui/core/Grid';


const LocationList = ({cities,onSelectedLocation}) => {
    const handlerWeatherLocationClick = (city) => {
        
            onSelectedLocation(city);
    }
    
    const strToComponent = (cities) =>(
        cities.map(city =>{
            return <WeatherLocation key={city +'_key_id'} 
                    city={city} 
                    onWeatherLocationClick={()=>handlerWeatherLocationClick(city)}
                    >
                    </WeatherLocation>})
    
    );
    return   <Grid item xs={12} md={6}>{strToComponent(cities)}</Grid>
    
};

export default LocationList;