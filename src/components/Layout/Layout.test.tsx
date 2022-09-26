import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

describe('Layout component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<Layout />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
});
