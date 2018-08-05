import React from 'react';


const WheaterExtraInfo = ({humidity,wind}) => {
    return (<div className="WheaterExtraInfo t-aling-left p-top-10">
        <h3 className="clear d-block  w-100 f-size-b">{`Humedad : ${humidity} % -`}</h3>{"\n"}
        <h2 className="clear d-block f-size-b">{`Vientos: ${wind} wind`}</h2>
    </div>)
  
};

export default WheaterExtraInfo;