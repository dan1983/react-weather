import React from 'react';
import Grid from '@material-ui/core/Grid';

const WheaterExtraInfo = ({humidity,wind}) => {
    return (<Grid item xs={12} sm={8} lg={8} className="WheaterExtraInfo t-aling-left">
        <h3 className="clear d-block  w-100 f-size-b">{`Humedad : ${humidity} % -`}</h3>{"\n"}
        <h2 className="clear d-block f-size-b">{`Vientos: ${wind} wind`}</h2>
    </Grid>)
  
};

export default WheaterExtraInfo;