import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<NotFoundPage />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
