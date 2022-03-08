import { getCovidData, todayDate } from '../../components/api';

const GET_DATA = 'countries/GET_DATA';
const FILTER_DATA = 'countries/FILTER_DATA';

const handleData = (data) => {
  const date = todayDate;
  const newData = [];
  const arr = data.dates[date].countries;
  const keys = Object.keys(arr);

  keys.forEach((key) => {
    newData.push(arr[key]);
  });
  return newData;
};

const filterCountries = (name, countries) => (dispatch) => {
  const newCountries = [...countries];
  const filteredCountries = newCountries.filter((country) => country.name === name);
  dispatch({
    type: FILTER_DATA,
    playload: handleData(filteredCountries),
  });
};

const loadCountriesData = () => async (dispatch) => {
  const covidData = await getCovidData();
  dispatch({
    type: GET_DATA,
    playload: handleData(covidData),
  });
};

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.playload;
    case FILTER_DATA:
      return action.playload;
    default:
      return state;
  }
};

export { countriesReducer, loadCountriesData, filterCountries };
