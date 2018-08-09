import React , { Component } from 'react';
import Location from './Location';
import PropTypes from 'prop-types';
import WeaterData from './WeatherData';
import './Style.css';
import 'typeface-roboto';

import CircularProgress from '@material-ui/core/CircularProgress';


const url="http://api.openweathermap.org/data/2.5/weather";
const city ="London,uk";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";






class WeatherLocation extends Component {
        constructor({city}){
                super();
                this.state ={
                        city,
                        data:null

                }

        }

        getWeaterState =(weather)=>{
                return "sunny";

        }

        componentWillMount(){
                const api_weather =`${url}?q=${this.state.city}&appid=${APP_KEY}`;
                fetch(api_weather).then(data => {
                        return data.json();
                }).then(weaterData => {
                       const data = this.getData(weaterData);
                       this.setState({data})
                });


        }

        componentDidMount() {
                //this.handleUpdateClick();
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
                const api_weather =`${url}?q=${city}&appid=${APP_KEY}`
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
                               {this.state.data?<WeaterData data={this.state.data}/>:<CircularProgress color="secondary" />}
                             
                        </div>
                )
        }
}
WeatherLocation.PropTypes={
        city:PropTypes.string
}


export default WeatherLocation;