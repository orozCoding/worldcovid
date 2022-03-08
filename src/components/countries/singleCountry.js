import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCountry = (props) => {
  const { country } = props;
  const navigate = useNavigate();

  return (
    <div className="selfCountries d-flex col">
      <div className="countryContainer d-flex col">
        <div className="selfTitle lato bold d-flex"><p>{country.name}</p></div>
        <div className="selfDate d-flex">
          <p className="bold">Date:</p>
          <p>{country.date}</p>
          {' '}

        </div>
        <div className="selfStats">
          <div className="d-flex">
            <p className="bold">Total Cases:</p>
            <p>{country.today_confirmed}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Total Deaths:</p>
            <p>{country.today_deaths}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Cases today:</p>
            <p>{country.today_new_confirmed}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Deaths today:</p>
            <p>{country.today_new_deaths}</p>
            {' '}

          </div>
        </div>
        <div className="backButton"><i className="bi bi-arrow-left-circle ck" onClick={() => navigate('/')} /></div>
      </div>
    </div>
  );
};

export default SingleCountry;
