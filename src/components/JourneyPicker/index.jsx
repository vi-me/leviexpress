import React, { useState, useEffect } from 'react';
import './style.css';

import mapImage from './img/map.svg';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date}>{date}</option>
      ))}
    </>
  );
};

const JourneyPicker = ({ onJourneyChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((resp) => resp.json())
      /*   .then((json) => console.log(json.data)); */
      .then((json) => onJourneyChange(json.data));
  };

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => {
        setCities(json.data);
      });
  }, []);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((resp) => resp.json())
      .then((json) => {
        setDates(json.data);
      });
  }, []);

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(e) => {
                setFromCity(e.target.value);
              }}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(e) => {
                setToCity(e.target.value);
              }}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              onChange={(e) => {
                setDate(e.target.value);
              }}
            >
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={handleSubmit}
              disabled={!date || !fromCity || !toCity}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};

export default JourneyPicker;
