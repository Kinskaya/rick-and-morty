import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

jest.spyOn(window.localStorage.__proto__, 'getItem');
jest.spyOn(window.localStorage.__proto__, 'setItem');

describe('SearchBar component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<SearchBar addSearch={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('localStorage works correctly', () => {
    const { unmount } = render(<SearchBar addSearch={jest.fn()} />);

    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.setItem).not.toBeCalled();

    unmount();
    expect(localStorage.setItem).toBeCalledTimes(1);
  });
  it('renders search in input', () => {
    render(<SearchBar addSearch={jest.fn()} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
