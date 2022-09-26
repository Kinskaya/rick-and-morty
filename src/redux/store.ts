import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import ordersReducer from './ordersSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    orders: ordersReducer,
  },
  /*middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload.selectedFile'],
        ignoredPaths: ['orders.orders.0.selectedFile', 'orders.order.selectedFile'],
      },
    }),*/
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
