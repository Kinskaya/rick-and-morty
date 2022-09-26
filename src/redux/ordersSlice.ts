import { createSlice } from '@reduxjs/toolkit';

import { TFormInput, TOrderForm } from '../pages/OrderForm/OrderForm';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [] as TOrderForm[],
    order: {
      nameInput: '',
      placeSelect: '',
      reminder: false,
      isToggled: false,
      dateInput: '',
      selectedFile: [],
    } as TFormInput,
  },
  reducers: {
    onInput(state, action) {
      state.order = action.payload;
      state.orders.push(state.order as TOrderForm);
    },
  },
});

export const { onInput } = ordersSlice.actions;
export default ordersSlice.reducer;
