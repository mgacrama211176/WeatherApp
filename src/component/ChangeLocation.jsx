import React from 'react';
import ForecastList from './ForecastList';

const ChangeLocation = ({
  changePlaceText,
  changingLocation,
  location,
  changelocation,
  myLocation,
  setChangelocation,
}) => {
  return (
    <div>
      <h1>Changing of location</h1>
      <input type="text" placeholder="Input City" onChange={changePlaceText} />
      <button onClick={changingLocation}>Change City</button>
      <ForecastList
        location={location}
        changelocation={changelocation}
        myLocation={myLocation}
        setChangelocation={setChangelocation}
      />
    </div>
  );
};

export default ChangeLocation;
