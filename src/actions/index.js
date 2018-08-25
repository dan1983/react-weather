
import transformForecastData from './../services/transformForecastData';

export const SET_CITY = 'setCity'
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA'; 

// actions creators

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA,payload});


const url="http://api.openweathermap.org/data/2.5/forecast";
const APP_KEY="0bed73889de8f5415f8ca768e929408f";

export const setSelectedCity = payload =>{

    return dispatch => {
        const api_forecast =`${url}?q=${payload}&appid=${APP_KEY}`;
            dispatch(setCity(payload));
            fetch(api_forecast).then(data => {
                return data.json();
            }).then(wheather_data => {
            if(wheather_data) {
                const forecastData = transformForecastData(wheather_data);
            dispatch(setForecastData({city:payload,forecastData}));
                //this.setState({forecastData});
                }
            });
    }
}
