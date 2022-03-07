import { getCovidData, todayDate } from "../../components/api";

const GET_DATA = 'countries/GET_DATA';

const handleData = (data) => {
  const date = todayDate;
  let newData = [];
  let arr = data['dates'][date]['countries'];
  let keys = Object.keys(arr)

  keys.forEach((key) => {
    newData.push(arr[key]);
  })
  return newData;
};

const loadCountriesData = () => async (dispatch) => {
  const covidData = await getCovidData();
  dispatch({
    type: GET_DATA,
    playload: handleData(covidData)
  })
};

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.playload;
    default:
      return state;
  }
}

export { countriesReducer, loadCountriesData };