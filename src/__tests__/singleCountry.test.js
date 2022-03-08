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
import worldInfo, { albania } from '../components/testsComponents/statsMock';
import SingleCountry from '../components/countries/singleCountry';

let mockData;

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Single Country', () => {
  mockData = worldInfo;
  it('renders', () => {
    const tree = renderer
      .create(
        <Router><SingleCountry country={albania} /></Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays country name', () => {
    mockData = worldInfo;
    render(<Router><SingleCountry country={albania} /></Router>);
    expect(screen.getByText('Albania')).toBeDefined();
  });

  it('displays country stats', () => {
    mockData = worldInfo;
    render(<Router><SingleCountry country={albania} /></Router>);
    expect(screen.getByText('Deaths today:')).toBeDefined();
  });
});
