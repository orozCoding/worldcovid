import React from 'react';
import {
  render, screen, fireEvent, wait,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
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
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders wold info', async () => {
    render(<Provider store={store}><App /></Provider>);
    await wait(expect(wait(screen.getByText('COVID19 GLOBAL STATS'))).toBeDefined());
  });

  it('Renders countries data', async () => {
    wait(render(<Provider store={store}><App /></Provider>));
    const country = wait(() => screen.getByText('Afghanistan'));
    await wait(expect(country).toBeDefined());
  });

  it('visits a country', async () => {
    wait(render(<Provider store={store}><App /></Provider>));
    wait(fireEvent.click(screen.getByText('Afghanistan')));
    const cases = wait(() => screen.getByText('Cases today:'));
    await wait(expect(cases).toBeDefined());
  });
});
