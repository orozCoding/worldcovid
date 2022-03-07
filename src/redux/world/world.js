import { getCovidData } from "../../components/api";

const GET_DATA = 'world/GET_DATA';

const handleData = (data) => {
  let arr = data['total'];
  return arr;
}

const loadWorldData = () => async (dispatch) => {
  const covidData = await getCovidData();
  dispatch({
    type: GET_DATA,
    playload: handleData(covidData)
  })
};

const worldReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return action.playload;
    default:
      return state;
  }
}

export { worldReducer, loadWorldData };