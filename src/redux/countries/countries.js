import { getCovidData, todayDate } from '../../components/api';

const GET_DATA = 'countries/GET_DATA';
const FILTER_DATA = 'countries/FILTER_DATA';
const RESTORE_DATA = 'countries/RESTORE_DATA';

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

const filterCountries = (name) => (dispatch) => {
  if (name.length) {
    dispatch({
      type: FILTER_DATA,
      playload: name,
    });
  } else {
    dispatch({
      type: RESTORE_DATA,
      playload: null,
    });
  }
};

const loadCountriesData = () => async (dispatch) => {
  const covidData = await getCovidData();
  dispatch({
    type: GET_DATA,
    playload: handleData(covidData),
  });
};

const countriesReducer = (state = { countries: [], filter: [] }, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        countries: action.playload,
        filter: action.playload,
      };
    case FILTER_DATA:
      return {
        ...state,
        filter: state.countries.filter((country) => country.id.includes(
          action.playload.toLowerCase(),
        )),
      };
    case RESTORE_DATA:
      return {
        ...state,
        filter: state.countries,
      };
    default:
      return state;
  }
};

export { countriesReducer, loadCountriesData, filterCountries };
