import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SingleCountry = (props) => {
  const { country } = props;
  console.log(country);
  const {
    name, date, today_confirmed: confirmed,
    today_deaths: deaths, today_new_confirmed: todayConfirmed,
    today_new_deaths: todayDeaths,
  } = country;
  const navigate = useNavigate();

  return (
    <div className="selfCountries d-flex col">
      <div className="countryContainer d-flex col">
        <div className="selfTitle lato bold d-flex"><p>{name}</p></div>
        <div className="selfDate d-flex">
          <p className="bold">Date:</p>
          <p>{date}</p>
          {' '}

        </div>
        <div className="selfStats">
          <div className="d-flex">
            <p className="bold">Total Cases:</p>
            <p>{confirmed}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Total Deaths:</p>
            <p>{deaths}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Cases today:</p>
            <p>{todayConfirmed}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Deaths today:</p>
            <p>{todayDeaths}</p>
            {' '}

          </div>
        </div>
        <div className="backButton"><i className="bi bi-arrow-left-circle ck" onClick={() => navigate('/')} aria-hidden="true" /></div>
      </div>
    </div>
  );
};

SingleCountry.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
    today_new_confirmed: PropTypes.number,
    today_new_deaths: PropTypes.number,
  }).isRequired,
};

export default SingleCountry;
