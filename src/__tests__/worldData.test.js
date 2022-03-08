import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import { worldData } from '../components/testsComponents/statsMock';
import WorldData from '../components/world/worldData';

describe('World Data', () => {
  it('renders', () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <WorldData worldData={worldData} />,
        )
        .toJSON();
    });
    expect(tree).toMatchSnapshot();
  });

  it('displays date', () => {
    act(() => {
      render(<WorldData worldData={worldData} />);
    });
    expect(screen.getByText('2022-03-07')).toBeDefined();
  });

  it('displays stats', () => {
    act(() => {
      render(<WorldData worldData={worldData} />);
    });
    expect(screen.getByText('447,338,425')).toBeDefined();
  });
});
