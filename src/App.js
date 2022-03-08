import React, { useEffect } from 'react';
import './App.css';
import WorldHome from './components/world/worldHome';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCountriesData } from './redux/countries/countries';
import { loadWorldData } from './redux/world/world';
import SingleCountry from './components/countries/singleCountry';
import filterName from './components/filterName';

const App = () => {
  const countriesData = useSelector((state) => state.countries);
  const worldData = useSelector((state) => state.world);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countriesData.length) {
      dispatch(loadCountriesData());
    }
  }, []);

  useEffect(() => {
    if (!worldData.length) {
      dispatch(loadWorldData());
    }
  }, []);


  return (
    <Router>
      <main className="main d-flex col">
        <Routes>
          <Route path="/" element={<WorldHome worldData={worldData} countriesData={countriesData} />} />
          {
            countriesData.map((country) => {
              return <Route key={country.id} path={
                `/${filterName(country.name)}`
              } element={<SingleCountry key={country.id} country={country} />} />
            })
          }
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
