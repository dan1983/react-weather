import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


import './App.css';


const cities = [
'Buenos Aires,ar',
'Washington DC,us',
'Bogota,col',
'Madrid,es'
]





class App extends Component { 

  
render() {
      return (
        <div className="App">
            <Grid container spacing={24}>
            <AppBar position="static">
              <Toolbar>
                <IconButton  color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  News
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
              <LocationListContainer cities={cities}/>
              <Grid item xs={12}  sm={6} className="detail">
                <div>
                  <ForecastExtendedContainer />
                </div>
              </Grid>
           </Grid>
        </div>
      );
    }
}


export default App;
