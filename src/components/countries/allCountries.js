import React from 'react';
import { useNavigate } from 'react-router-dom';
import filterName from '../filterName';

const AllCountries = (props) => {
  const { countriesData } = props;
  const navigate = useNavigate();

  return (
    <div className="countriesContainer d-flex">
      {
      countriesData.map((country) => (
        <div
          className="countryBox d-flex col ck"
          key={country.id}
          onClick={() => navigate(`/${filterName(country.name)}`)}
        >
          <div className="arrowIcon d-flex">
            <i
              className="bi bi-arrow-right-circle ck"
              onClick={() => navigate(`/${filterName(country.name)}`)}
            />
          </div>
          <div className="countryInfo d-flex col">
            <div className="lato bold countryName">{country.name}</div>
            <div className="countryTotal">{country.today_confirmed}</div>
          </div>
        </div>
      ))
}
      <div
        className="countryBox d-flex col ck"
        key="empty box"
        onClick={() => navigate('/')}
      >
        <p>Source: Johns Hopkins University.</p>
        <p>API by Narrativa</p>
      </div>
    </div>
  );
};

export default AllCountries;
