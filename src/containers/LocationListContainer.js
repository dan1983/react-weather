import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { setSelectedCity} from './../actions';
import {connect} from 'react-redux';
import LocationList from './../components/WeatherLocation/LocationList'


class LocationListContainer extends Component {

    handlerSelectedLocation =(city)=>{

       // this.setState({city:city});
        this.props.distpatchSetCity(city);
    
      }

    render(){
            return  <LocationList cities={this.props.cities}
                    onSelectedLocation={this.handlerSelectedLocation}>
                    </LocationList>


    }


}
    
LocationListContainer.prototypes = {
    distpatchSetCity: PropTypes.func.isRequired
      
}
      
      
const mapDispatchToPropsActions = (dispatch)=>({
    distpatchSetCity:value =>dispatch(setSelectedCity(value))
});
      

 

export default  connect(null,mapDispatchToPropsActions)(LocationListContainer);

