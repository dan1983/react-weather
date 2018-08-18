import React,{Component}  from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecastData from './../../services/transformForecastData';


const url="http://api.openweathermap.org/data/2.5/forecast";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";


class Forecast extends Component {

    constructor(){
        super();
        this.state={forecastData:null}
    }

    renderForecastItemWeekday(forecastData,city){
       return forecastData.map( foreacast => {
            return  <div><h3>{city}</h3><ForecastItem
                key={`${foreacast.weekDay}${forecastData.hour}`}
                weekday={foreacast.weekday}
                data ={foreacast.data}
                hour ={foreacast.hour}
            /></div>
        })
      
       
        //return  weekDays.map((day)=><ForecastItem key={day} weekday={day} data={data}  hour={10}/>                       )
       
       
        
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
             this.setState({forecastData});
             }
    });



    }
  
    render() {
       
        const {forecastData}=this.state;
        return( <div>
                    {(forecastData!==null && (this.props.city!==null ||  this.props.city!=="undefined") )?
                this.renderForecastItemWeekday(forecastData,this.props.city) :this.inProgress()
                    }
                </div>);
    }

   
}

Forecast.propTypes = {
    city:PropTypes.string.isRequired 

}

export default Forecast;


