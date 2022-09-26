import { render } from '@testing-library/react';
import OrderList from './OrderList';

describe('OrderList component', () => {
  it('render correctly', () => {
    window.URL.createObjectURL = jest.fn();
    const items = [
      {
        nameInput: 'Tom',
        placeSelect: 'Minsk',
        reminder: true,
        isToggled: true,
        dateInput: '2022-04-08',
        selectedFile: undefined,
      },
    ];
    const { asFragment } = render(<OrderList orders={items} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
