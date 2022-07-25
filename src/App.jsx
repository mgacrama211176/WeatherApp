import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherContainer from './component/WeatherContainer';
import ChangeLocation from './component/ChangeLocation';
import './App.css';

const App = () => {
  const location = 'Manila';
  const url = `https://api.weatherapi.com/v1/current.json?key=2bed6c0ada28441595e44943220204&q=${location}&aqi=no`;

  const [condition, setCondition] = useState('This is for the Icons');
  const [information, setinformation] = useState('Weather Status');
  const [myLocation, setMyLocation] = useState(location);
  const [locationTemp, setLocationTemp] = useState('Location Temp');
  const [changelocation, setChangelocation] = useState(location);

  const changingLocation = (e) => {
    e.preventDefault();

    setChangelocation({
      text: { myLocation },
      completed: false,
      id: Math.random() * 2,
    });
  };

  const changePlaceText = (e) => {
    setMyLocation(e.target.value);
    console.log(e.target.value);
  };

  useEffect(async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=2bed6c0ada28441595e44943220204&q=${myLocation}&aqi=no`;
    const { data } = await axios.get(url);
    //data Information
    setinformation(data.current?.condition.text);
    setCondition(data.current?.condition.icon);
    setLocationTemp(data.current?.temp_c);
    setMyLocation(data.location.name);

    // Image = setCondition(data.current?.condition.icon);
  }, [changelocation]);

  return (
    <div className="background">
      <h1>WEATHER APP</h1>
      <WeatherContainer
        condition={condition}
        information={information}
        myLocation={myLocation}
        locationTemp={locationTemp}
        changelocation={changelocation}
        changingLocation={changingLocation}
      />
      <ChangeLocation
        changePlaceText={changePlaceText}
        changingLocation={changingLocation}
        location={location}
        myLocation={myLocation}
        setChangelocation={setChangelocation}
      />
    </div>
  );
};

export default App;
