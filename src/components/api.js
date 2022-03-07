const covidAPI = 'https://api.covid19tracking.narrativa.com/api/';
const todayDate = new Date().toISOString().slice(0,10);

const api = `${covidAPI}${todayDate}`

const fetchData = (api) => {
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getCovidData = async () => fetchData(api);

export { getCovidData, todayDate };