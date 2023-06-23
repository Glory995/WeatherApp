
import React from 'react';
import styled from 'styled-components';


const WeatherImage= styled.img`
        width:140px;
        height:140px;
        margin: 40px auto


`;

const ChooseCityLabel= styled.span`
    color: black;
    font-size:18px;
    font-weight: bold;
    margin: 10px auto 

`;


const SearchBox  = styled.form`

    display:flex;
    flex-direction:row;
    border:black solid 1px;
    border-radius:2px;
    color:black;
    font-size:18px;
    
    margin: 20px auto;

    & input{
      padding:10px;
      font-size:14px;
      border:none;
      outline:none;
      font-weight:bold;
    }

    & button{
      color:white;
      background: black;
      padding:10px;
      font-size:14px;
      border:none;
      outline:none;
      font-weight:bold;
      cursor:pointer;
    }
    `;

const CityComponent = ( props) => {

  const {updateCity, fetchWeather} = props

  return (
    <>

        <WeatherImage src="/WeatherApp/icons/perfect-day.svg" alt="" />
        <ChooseCityLabel> Find the weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input placeholder='city ' onChange={ (e)=>updateCity(e.target.value)}  />
          <button type='submit'>Search</button>
        </SearchBox>
    </>
  )
}

export default CityComponent
