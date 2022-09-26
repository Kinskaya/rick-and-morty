import OrderForm from './OrderForm';
import { render } from '@testing-library/react';

describe('OrderForm component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<OrderForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
