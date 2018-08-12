import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington DC,us',
  'Bogota,col',
  'Madrid,es'
]

class App extends Component {

  handlerSelectedLocation =(city)=>{
    console.log(city);
  
  }
  
    render() {
      return (
        <div className="App">
           <LocationList cities={cities}
           onSelectedLocation={this.handlerSelectedLocation}
           ></LocationList>
        </div>
      );
    }
}

export default App;
