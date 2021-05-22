import React, { useState, useEffect } from 'react';
import './style.css';
import JourneyPicker from './JourneyPicker';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <>
      <JourneyPicker onJourneyChange={setJourney} />
      {journey ? `Nalezeno spojení s id  ${journey.journeyId}` : ''}
    </>
  );
};

export default Home;
