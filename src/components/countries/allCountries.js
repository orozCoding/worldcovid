import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import filterName from '../filterName';

const AllCountries = (props) => {
  const { countriesData } = props;
  const { filter } = countriesData;
  const navigate = useNavigate();

  return (
    <div className="countriesContainer d-flex">
      {
        filter.map((country) => (
          <div
            className="countryBox d-flex col ck"
            key={country.id}
            onClick={() => navigate(`/${filterName(country.name)}`)}
            aria-hidden="true"
          >
            <div className="arrowIcon d-flex">
              <i
                className="bi bi-arrow-right-circle ck"
                aria-hidden="true"
                onClick={() => navigate(`/${filterName(country.name)}`)}
              />
            </div>
            <div className="countryInfo d-flex col">
              <div className="lato bold countryName">{country.name}</div>
              <div className="countryTotal">{Intl.NumberFormat().format(country.today_confirmed)}</div>
            </div>
          </div>
        ))
      }
      <div
        className="countryBox d-flex col ck"
        key="empty box"
        onClick={() => navigate('/')}
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
  );
};

AllCountries.propTypes = {
  countriesData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default AllCountries;
