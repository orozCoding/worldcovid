const covidAPI = 'https://api.covid19tracking.narrativa.com/api/';
let todayDate = new Date(new Date().setDate(new Date().getDate()-1));
todayDate = todayDate.toISOString().slice(0, 10);

console.log(todayDate);

const api = `${covidAPI}${todayDate}`

const fetchData = (api) => {
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getCovidData = async () => fetchData(api);

export { getCovidData, todayDate };