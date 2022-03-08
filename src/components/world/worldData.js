import React from "react";
import { todayDate } from "../api";

const WorldData = (props) => {
  const { worldData } = props;

  return (
    <div className="homeHeader d-flex">
      <div className="home-left d-flex col">
        <p className="covid-title mainTitle lato">COVID19 GLOBAL STATS</p>
      </div>
      <div className="home-right d-flex col">
        <div className="subTitle lato bold">Worldwide Stats:</div>
        <div>Date: {todayDate}</div>
        <div>Total cases: {worldData['today_confirmed']}</div>
        <div>Total deaths: {worldData['today_deaths']}</div>
      </div>

    </div>
  )
};

export default WorldData;