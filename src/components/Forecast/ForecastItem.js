import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({weekday})=>{

    return <div>
               {weekday}
           </div>


}
ForecastItem.prototype ={
    weekday:PropTypes.string.isRequired,


}

export default ForecastItem;