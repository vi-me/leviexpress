import React, { useState, useEffect } from 'react';
import './style.css';
import JourneyPicker from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey === null ? '' : <JourneyDetail journey={journey} />}
    </>
  );
};

export default Home;
