import React from 'react';
import WheaterTemperature from './WheaterTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';


const WheaterData = () => (
    <div>
        <WheaterTemperature temperature={20} weatherState={"cloud"}/>
        <WheaterExtraInfo humidity={80} wind={"10 m/s"}/>
      

    </div>
);

export default WheaterData;

