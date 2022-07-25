import React from 'react';
import './Component.css';

const WeatherContainer = ({
  condition,
  information,
  myLocation,
  locationTemp,
  changelocation,
  changingLocation,
}) => {
  // console.log(changelocation);
  return (
    <div className="GroupContrainer">
      <div className="weatherContainer">
        <img src={condition} alt="weather-icons" />
        <p>{myLocation}</p>
        <p>
          <span>{locationTemp} ℃</span>
        </p>
        <p>"{information}"</p>
      </div>
    </div>
  );
};

export default WeatherContainer;
