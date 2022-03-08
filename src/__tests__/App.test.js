import React from 'react';
import {
  render, screen, fireEvent, wait,
} from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configStore';
import worldInfo from '../components/testsComponents/statsMock';

let mockData;

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('App', () => {
  mockData = worldInfo;
  it('renders', () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <Provider store={store}>
            <App />
          </Provider>,
        )
        .toJSON();
    });
    expect(tree).toMatchSnapshot();
  });

  it('renders wold info', async () => {
    act(() => {
      render(<Provider store={store}><App /></Provider>);
    });
    await expect(screen.getByText('COVID19 GLOBAL STATS')).toBeDefined();
  });

  it('Renders countries data', async () => {
    act(() => {
      render(<Provider store={store}><App /></Provider>);
    });
    const country = act(() => { screen.getByText('Afghanistan'); });
    await expect(country).toBeDefined();
  });

  it('visits a country', async () => {
    act(() => {
      render(<Provider store={store}><App /></Provider>);
    });
    act(() => {
      fireEvent.click(screen.getByText('Afghanistan'));
    });
    const cases = screen.getByText('Cases today:');
    await expect(cases).toBeDefined();
  });
});
