import React, { Component } from 'react';

import Forecast from './../components/Forecast/Forecast';
import {connect} from 'react-redux';



class ForecastExtendedContainer extends Component {
    render(){
        return  <Forecast city={this.props.city}
                />


}





}
const mapStateProps = (state) => ({city:state.city});


export default  connect(mapStateProps,null)(ForecastExtendedContainer);