const transformWeatherData = (weaterData)=> {
    
  
   if(weaterData.cod!=="404" && weaterData !=='undefined'){
                      
        const { temp } =weaterData.main;
        const { humidity}= weaterData.main;
        const { speed } = weaterData.wind;
        const weaterState="sunny";
        const data ={
                temperature:temp,
                weatherState: weaterState,
                humidity:humidity,
                wind: `${speed} m/s`
        };
   return data;


}
   
 
 
 }
 
 export default transformWeatherData;