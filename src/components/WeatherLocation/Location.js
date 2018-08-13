import React from 'react';

import Grid from '@material-ui/core/Grid';

const Location = (props) => {
    const {city} = props;
    return (<Grid container spacing={24}>
                <Grid item xs={12} className="location">
                    <h1> {city} </h1>
                </Grid>
            </Grid> );
};

export default Location;