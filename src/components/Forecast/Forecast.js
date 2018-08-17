import React,{Component}  from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecastData from './../../services/transformForecastData';
/*

const forecastData ={
    temperature:20,
    weatherState: 'sunny',
    humidity:20,
    wind:10,
}

const weekDays =[
    'Lunes',
    'Martes',
    'MIercoles',
    'Jueves',
    'Viernes'


];
*/

const url="http://api.openweathermap.org/data/2.5/forecast";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";


class Forecast extends Component {

    constructor(){
        super();
        this.state={forecastData:null}
    }

    renderForecastItemWeekday(forecastData){
       
        //return  weekDays.map((day)=><ForecastItem key={day} weekday={day} data={data}  hour={10}/>                       )
        return "cargando...";
       
        
    }
    inProgress(){

        return 'in Progress';
    }

    componentDidMount(){
       
        const api_forecast =`${url}?q=${this.props.city}&appid=${APP_KEY}`;
        fetch(api_forecast).then(data => {
            return data.json();
        }).then(wheather_data => {
          if(wheather_data) {
             
              const forecastData = transformForecastData(wheather_data);
                   console.log(forecastData);
                   
                    //this.setState({forecastData})
               this.setState({forecastData});
                  // const forecastData=transformForecastData(weaterDataForecast);
                   //console.log(forecastData);
                   
                 
                 
                   
            }
    });



    }
  
    render() {
       
        const {forecastData}=this.props;
       
        return( <div>
                {forecastData!==null ? 
                this.renderForecastItemWeekday(forecastData) :this.inProgress()
                }
            </div>);
    }

   
}

Forecast.propTypes = {
    city:PropTypes.string.isRequired 

}

export default Forecast;


