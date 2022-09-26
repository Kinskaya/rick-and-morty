import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App/App';

describe('App component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<App />, { wrapper: BrowserRouter });
    expect(asFragment()).toMatchSnapshot();
  });
  it('render home link', () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });
    const linkElement = getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
