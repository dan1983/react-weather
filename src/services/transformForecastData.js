import moment from 'moment';
import transformWeaterData from './transformWeaterData'


const transformForecastData = data => {{

       return  data.list.filter(item =>{
                  return  moment.unix(item.dt).hour() === 8
              
            }).map(item=>(
                {   
                    weekDay: moment.unix(item.dt).format('ddd') ,
                    hour: moment.unix(item.dt).hour() 


                }


            ))
           
         }}



export default transformForecastData;