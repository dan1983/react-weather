import React, { Component } from 'react';
import LocationList from './components/WeatherLocation/LocationList';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Forecast from './components/Forecast/Forecast';
import './App.css';

const cities = [
'Buenos Aires,ar',
'Washington DC,us',
'Bogota,col',
'Madrid,es'
]

class App extends Component { 

  constructor(){
    super();
    this.state = {city:null}

  }


  handlerSelectedLocation =(city)=>{

    this.setState({city:city});
  }
  
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
              <LocationList cities={cities}
                onSelectedLocation={this.handlerSelectedLocation}>
              </LocationList>
              <Grid item xs={12}  sm={6} className="detail">
                <div>

                  {this.state.city && 
                  <Forecast city={this.state.city}></Forecast>
                  }
                </div>
              </Grid>
           </Grid>
        </div>
      );
    }
}

export default App;
