const covidAPI = 'https://api.covid19tracking.narrativa.com/api/';
const date = new Date(new Date().setDate(new Date().getDate() - 1));
const todayDate = date.toISOString().slice(0, 10);

const api = `${covidAPI}${todayDate}`;

const fetchData = (api) => {
  const data = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

const getCovidData = async () => fetchData(api);

export { getCovidData, todayDate };
