import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { countriesData } from '../components/testsComponents/statsMock';
import AllCountries from '../components/countries/allCountries';

describe('All Countries', () => {
  it('renders', () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <Router><AllCountries countriesData={countriesData} /></Router>,
        )
        .toJSON();
    });
    expect(tree).toMatchSnapshot();
  });

  it('displays countries info', () => {
    act(() => {
      render(<Router><AllCountries countriesData={countriesData} /></Router>);
    });
    expect(screen.getByText('Afghanistan')).toBeDefined();
  });
});
