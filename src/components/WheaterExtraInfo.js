import React from 'react';


const WheaterExtraInfo = ({humidity,wind}) => (
    <div>
        <span>{`${humidity} % -`}</span>
        <span>{`${wind} wind`}</span>
    </div>
  
);

export default WheaterExtraInfo;