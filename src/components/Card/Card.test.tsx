import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  it('render correctly', () => {
    const item = {
      id: 1,
      name: 'MacBook',
      price: 1400,
      imageUrl: 'https://picsum.photos/id/180/2400/1600',
    };
    const { asFragment } = render(
      <Card id={item.id} imageUrl={item.name} name={item.name} price={item.price} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
