import React from 'react';
import Forecast from './Forecast';
import './Component.css';

const ForecastList = ({
  location,
  changelocation,
  myLocation,
  setChangelocation,
}) => {
  return (
    <div>
      <h1>WEATHER FORECAST</h1>
      <Forecast
        location={location}
        changelocation={changelocation}
        myLocation={myLocation}
        setChangelocation={setChangelocation}
      />
    </div>
  );
};

export default ForecastList;
