
import './App.css';
import styled from 'styled-components';

import CityComponent from './modules/CityComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';
import { useState } from 'react';
import axios from 'axios';


const API_KEY= "64c2c3e3b2a6e4b2520b76eb285ce9e2"

const Container = styled.div`

    display:flex;
    flex-direction: column;
    margin:auto;
    align-items:center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width:380px;
    background: white;
    font-family: 'Montserrat';

`;

const AppLabel = styled.span`
    color:black;
    font-size:18px;
    font-weight:bold;


`;


function App() {

  const [city , updateCity] = useState();

  const [weather, updateweather] = useState();

  const fetchWeather= async(e)=>{

      e.preventDefault();

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    updateweather(response.data);

  }


  return (
    <Container>
          <AppLabel> Weather App</AppLabel>
          
          { weather? <WeatherInfoComponent  weather={weather} /> :<CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />}
          
    </Container>
  );
}

export default App;
