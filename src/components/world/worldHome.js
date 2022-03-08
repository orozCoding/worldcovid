import { React } from 'react';
import AllCountries from '../countries/allCountries';
import WorldData from './worldData';
import PropTypes from 'prop-types';

const WorldHome = (props) => {
  const { countriesData, worldData } = props;

  console.log(countriesData, worldData);

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
