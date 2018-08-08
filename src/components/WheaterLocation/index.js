import React , { Component } from 'react';
import Location from './Location';
import WeaterData from './WeatherData';
import './Style.css';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import SelectInput from '@material-ui/core/Select/SelectInput';

const location ="London,uk";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";
const api_weather =`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APP_KEY}`





class WheaterLocation extends Component {
        constructor(){
                super();
                this.state ={
                        city:"Barcelona",
                        data:null

                }

        }

        getWeaterState =(weather)=>{
                return "sunny";

        }

        componentDidMount() {
                this.handleUpdateClick();
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
                const { classes } = this.props;
                return (
                        <div className="WheaterLocation flex flex-direction-c">
                                <Location city={this.state.city}/>
                               {this.state.data?<WeaterData data={this.state.data}/>:<CircularProgress color="secondary" />}
                             
                        </div>
                )
        }
}

export default WheaterLocation;