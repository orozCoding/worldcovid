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
import worldInfo, { worldData } from '../components/testsComponents/statsMock';
import WorldData from '../components/world/worldData';

let mockData;

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('World Data', () => {
  mockData = worldInfo;
  it('renders', () => {
    const tree = renderer
      .create(
        <WorldData worldData={worldData} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays date', () => {
    mockData = worldInfo;
    render(<WorldData worldData={worldData} />);
    expect(screen.getByText('2022-03-07')).toBeDefined();
  });

  it('displays stats', () => {
    mockData = worldInfo;
    render(<WorldData worldData={worldData} />);
    expect(screen.getByText('447,338,425')).toBeDefined();
  });
});
