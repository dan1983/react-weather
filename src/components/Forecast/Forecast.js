import React,{Component}  from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';


const weekDays =[
    'Lunes',
    'Martes',
    'MIercoles',
    'Jueves',
    'Viernes'


];


class Forecast extends Component {

    renderForecastItemWeekday(){
       return  weekDays.map((day)=><ForecastItem key={day} weekday={day} />                       )

       
        
    }
  
    render() {
        const {city} = this.props;
        return( <div>
            "Pronostico Extendido  {city}"
                {this.renderForecastItemWeekday()}
            </div>);
    }
}

Forecast.propTypes = {
    city:PropTypes.string.isRequired 

}

export default Forecast;


