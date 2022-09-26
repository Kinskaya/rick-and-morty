import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from '../../pages/Home/HomePage';
import AboutPage from '../../pages/About/AboutPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import OrderForm, { TOrderForm } from '../../pages/OrderForm/OrderForm';
import Layout from '../Layout/Layout';
import { ICard } from '../Card/Card';
import CardPage from '../../pages/CardPage/CardPage';
import { store } from '../../redux/store';

export interface IState {
  info: ICard[];
  searchValue: string | undefined;
  loading: boolean;
  error: string;
  modal: boolean;
  item: TItem;
  selectValue: string;
  orders: TOrderForm[];
  order: TOrderForm;
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  totalPages: number;
}

export type TItem = {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
};

export interface IAction {
  type: string;
  payload?: unknown;
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="order" element={<OrderForm />} />
            <Route path=":id" element={<CardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
