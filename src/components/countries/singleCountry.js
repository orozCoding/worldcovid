import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterCountries } from '../../redux/countries/countries';

const SingleCountry = (props) => {
  const { country } = props;
  const {
    name, date, today_confirmed: confirmed,
    today_deaths: deaths, today_new_confirmed: todayConfirmed,
    today_new_deaths: todayDeaths,
  } = country;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFilter = () => {
    const name = '';
    dispatch(filterCountries(name));
  };

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
            <p>{Intl.NumberFormat().format(confirmed)}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Total Deaths:</p>
            <p>{Intl.NumberFormat().format(deaths)}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Cases today:</p>
            <p>{Intl.NumberFormat().format(todayConfirmed)}</p>
            {' '}

          </div>
          <div className="d-flex">
            <p className="bold">Deaths today:</p>
            <p>{Intl.NumberFormat().format(todayDeaths)}</p>
            {' '}

          </div>
          <div
            className="d-flex col insideCredits"
            key="credit box"
            aria-hidden="true"
          >
            <p>Source: Johns Hopkins University.</p>
            <p>API by Narrativa</p>
            <p>
              Made by
              {' '}
              <span>
                <a href="https://github.com/orozCoding" className="credits">orozCoding</a>
              </span>
            </p>
          </div>
        </div>
        <div className="backButton">
          <i
            className="bi bi-arrow-left-circle ck"
            onClick={() => {
              handleFilter();
              navigate('/');
            }}
            aria-hidden="true"
          />

        </div>
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
