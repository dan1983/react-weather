import React from 'react';

const Location = (props) => {
    const {city} = props;
    return <div className="location"> <h1> {city} </h1> </div>
};

export default Location;