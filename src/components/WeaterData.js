import React from 'react';
import WheaterTemperature from './WheaterTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';


const WheaterData = () => (
    <div>
        <WheaterTemperature/>
        <WheaterExtraInfo humidity={80} wind={"10 m/s"}/>
      

    </div>
);

export default WheaterData;