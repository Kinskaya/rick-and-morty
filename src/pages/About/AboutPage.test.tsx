import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage component', () => {
  it('render correctly', () => {
    const { asFragment } = render(<AboutPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
