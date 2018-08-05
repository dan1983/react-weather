import React , { Component } from 'react';
import Location from './Location';
import WeaterData from './WeatherData';
import './Style.css';


const data ={
        temperature:20,
        weatherState:"cloud",
        humidity:50,
        wind:96

};

const data1 ={
        temperature:21,
        weatherState:"sunny",
        humidity:20,
        wind:76

};

class WheaterLocation extends Component {
        constructor(){
                super();
                this.state ={
                        city:"Barcelona",
                        data:data

                }

        }
 
        render () {
                return (
                        <div className="WheaterLocation flex flex-direction-c">
                                <Location city={this.state.city}/>
                                <WeaterData data={this.state.data}/>
                                <button>Click</button>
                        </div>
                )
        }
}

export default WheaterLocation;