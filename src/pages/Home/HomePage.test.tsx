import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import HomePage from './HomePage';

jest.mock('axios');

async function addHandler(value: string) {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${value}`);
  return response.data[0].name;
}

describe('HomePage component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders page title name', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Rick and Morty/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('returns the name of the first item', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
        },
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
        },
      ],
    });

    const name = await addHandler('r');
    expect(name).toEqual('Rick Sanchez');
  });
});
