import React from 'react';
import PropTypes from 'prop-types';
import { todayDate } from '../api';

const WorldData = (props) => {
  const { worldData } = props;
  const { today_confirmed: confirmed = 0, today_deaths: deaths = 0 } = worldData;

  return (
    <div className="homeHeader d-flex">
      <div className="home-left d-flex col">
        <p className="covid-title mainTitle lato">COVID19 GLOBAL STATS</p>
      </div>
      <div className="home-right d-flex col">
        <div className="subTitle lato bold">Worldwide Stats:</div>
        <div className="d-flex worldData">
          <p>Date:</p>
          <p>{todayDate}</p>
        </div>
        <div className="d-flex worldData">
          <p>Total cases:</p>
          <p>{Intl.NumberFormat().format(confirmed)}</p>
        </div>
        <div className="d-flex worldData">
          <p>Total deaths:</p>
          <p>{Intl.NumberFormat().format(deaths)}</p>
        </div>
      </div>

    </div>
  );
};

export default WorldData;

WorldData.propTypes = {
  worldData: PropTypes.shape({
    today_confirmed: PropTypes.number,
    today_deaths: PropTypes.number,
  }).isRequired,
};
