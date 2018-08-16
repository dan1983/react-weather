import moment from 'moment';

const transformForecastData = (data)=> {
   data.list.filter((item)=>{
             moment.unix(item.dt).hour===6 ||
             moment.unix(item.dt).hour===12 ||
             moment.unix(item.dt).hour===18

   })

  


}

export default transformForecastData;