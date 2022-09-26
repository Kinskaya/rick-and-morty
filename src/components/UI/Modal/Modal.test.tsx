import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('render correctly', () => {
    const modal = {
      visible: true,
      handleVisible(): void {},
    };
    const { asFragment } = render(
      <Modal visible={modal.visible} handleVisible={modal.handleVisible} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('modal shows the children and a close button', () => {
    const modal = {
      visible: false,
      handleVisible(): void {},
    };
    const handleClose = jest.fn();

    const { getByText } = render(
      <Modal handleVisible={modal.handleVisible} visible={modal.visible}>
        <div>test</div>
      </Modal>
    );

    expect(getByText('test')).toBeTruthy();

    fireEvent.click(getByText(/x/));

    expect(handleClose).toHaveBeenCalledTimes(0);
  });
});
