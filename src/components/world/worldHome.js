import { React } from 'react';
import PropTypes from 'prop-types';
import AllCountries from '../countries/allCountries';
import WorldData from './worldData';

const WorldHome = (props) => {
  const { countriesData, worldData } = props;

  return (
    <div>
      <WorldData worldData={worldData} />
      <div className="separator d-flex col">
        <p className="lato bold totalTitle">Total Cases By Country</p>
        <p>Select one country for more information</p>
      </div>
      <AllCountries countriesData={countriesData} />
    </div>
  );
};

export default WorldHome;

WorldHome.propTypes = {
  countriesData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  worldData: PropTypes.shape({}).isRequired,
};
