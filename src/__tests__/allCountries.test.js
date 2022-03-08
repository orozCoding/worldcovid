import React from 'react';
import {
  render, screen, fireEvent, wait,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import App from '../App';
import store from '../redux/configStore';
import worldInfo, { countriesData } from '../components/testsComponents/statsMock';
import AllCountries from '../components/countries/allCountries';

let mockData;

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('All Countries', () => {
  mockData = worldInfo;
  it('renders', () => {
    const tree = renderer
      .create(
        <Router><AllCountries countriesData={countriesData} /></Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays countries info', () => {
    mockData = worldInfo;
    render(<Router><AllCountries countriesData={countriesData} /></Router>);
    expect(screen.getByText('Afghanistan')).toBeDefined();
  });
});
