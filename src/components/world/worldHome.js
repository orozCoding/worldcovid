import { React } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AllCountries from '../countries/allCountries';
import WorldData from './worldData';
import { filterCountries } from '../../redux/countries/countries';

const WorldHome = (props) => {
  const { countriesData, worldData } = props;
  const dispatch = useDispatch();

  const handleFilter = () => {
    const input = document.getElementById('countryFilter');
    const name = input.value;
    dispatch(filterCountries(name));
  };

  return (
    <div>
      <WorldData worldData={worldData} />
      <div className="separator d-flex col">
        <p className="lato bold totalTitle">Total Cases By Country</p>
        <p>Select one country for more information</p>
        <input
          id="countryFilter"
          type="text"
          onChange={() => handleFilter()}
          placeholder="Search a country"
        />
      </div>
      <AllCountries countriesData={countriesData} />
    </div>
  );
};

export default WorldHome;

WorldHome.propTypes = {
  countriesData: PropTypes.shape({}).isRequired,
  worldData: PropTypes.shape({}).isRequired,
};
