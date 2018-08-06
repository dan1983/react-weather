import React , { Component } from 'react';
import Location from './Location';
import WeaterData from './WeatherData';
import './Style.css';
const location ="London,uk";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";
const api_weather =`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_KEY}`


const data ={
        temperature:20,
        weatherState:"cloud",
        humidity:50,
        wind:96

};



class WheaterLocation extends Component {
        constructor(){
                super();
                this.state ={
                        city:"Barcelona",
                        data:data

                }

        }

        getWeaterState =(weather)=>{
                return "sunny";

        }

         getData =(weaterData) => {
               const { humidity,temp } = weaterData.main;
               const { speed } = weaterData.wind;
               const weaterState= this.getWeaterState(this.weather);

               const data1 ={
                temperature:temp,
                weatherState: weaterState,
                humidity:humidity,
                wind: `${speed} m/s`
        
        };

        return data1;


        }
        handleUpdateClick = () => {
                fetch(api_weather).then(data => {
                       
                        return data.json();

                }).then(weaterData => {
                       const data = this.getData(weaterData);
                       this.setState({data})
                        

                });

         }
         
 
        render () {
                return (
                        <div className="WheaterLocation flex flex-direction-c">
                                <Location city={this.state.city}/>
                                <WeaterData data={this.state.data}/>
                                <button onClick={this.handleUpdateClick}>Click</button>
                        </div>
                )
        }
}

export default WheaterLocation;