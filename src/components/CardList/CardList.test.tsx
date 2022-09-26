import { render } from '@testing-library/react';
import CardList from './CardList';
import React from 'react';

describe('CardList component', () => {
  it('render correctly', () => {
    const error = 'Sorry, nothing found';
    const { asFragment } = render(<CardList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
