import { useEffect, useState } from 'react';
import axios from 'axios';
import './Component.css';

const Forecast = ({ myLocation }) => {
  let url = `https://api.weatherapi.com/v1/forecast.json?key=2bed6c0ada28441595e44943220204&q=${myLocation}&days=10&aqi=no&alerts=no`;

  const [forecasting, setForeCasting] = useState('Forecasting');
  const [forecastingIcon, setforecastingIcon] = useState('ForecastingIcon');
  const [avgTemp, setAvgTemp] = useState('');
  const [forecastDT, setForecastDT] = useState('');

  useEffect(async () => {
    const { data } = await axios.get(url);
    const TimeStamp = 23;
    const forecastIndex = [
      setForeCasting(
        data.forecast.forecastday[0].hour[TimeStamp].condition.text
      ),
      setforecastingIcon(
        data.forecast.forecastday[0].hour[TimeStamp].condition.icon
      ),
      setAvgTemp(data.forecast.forecastday[0].hour[TimeStamp].temp_c),
      setForecastDT(data.forecast.forecastday[0].hour[TimeStamp].time),
    ];
    console.log(forecastIndex);
  }, [myLocation]);

  return (
    <div>
      <div className="forecastHolder">
        <div className="forecastContainer">
          <img src={forecastingIcon} alt="forecastWeather" />
          {myLocation}
          <p>{forecastDT}</p>
          {forecasting} <p>{avgTemp} ℃</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
