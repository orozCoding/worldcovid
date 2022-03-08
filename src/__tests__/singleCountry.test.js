import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { albania } from '../components/testsComponents/statsMock';
import SingleCountry from '../components/countries/singleCountry';

describe('Single Country', () => {
  it('renders', () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <Router><SingleCountry country={albania} /></Router>,
        )
        .toJSON();
    });
    expect(tree).toMatchSnapshot();
  });

  it('displays country name', () => {
    act(() => {
      render(<Router><SingleCountry country={albania} /></Router>);
    });
    expect(screen.getByText('Albania')).toBeDefined();
  });

  it('displays country stats', () => {
    act(() => {
      render(<Router><SingleCountry country={albania} /></Router>);
    });
    expect(screen.getByText('Deaths today:')).toBeDefined();
  });
});
