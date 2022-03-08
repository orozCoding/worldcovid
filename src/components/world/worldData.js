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
        <div>
          Date:
          {todayDate}
        </div>
        <div>
          Total cases:
          {confirmed}
        </div>
        <div>
          Total deaths:
          {deaths}
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
