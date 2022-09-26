import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/UI/input/SearchBar';
import CardList from '../../components/CardList/CardList';
import { IState } from '../../components/App/App';
import SelectCards from '../../components/UI/SelectCards/SelectCards';
import Pagination from '../../components/UI/Pagination/Pagination';

import { sortCards, fetchData, paginate } from '../../redux/cardsSlice';
import { AppDispatch, RootState } from '../../redux/store';

import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [sort] = useState('');
  const selectCards = () => dispatch(sortCards({ sort }));

  const { selectValue, cardsPerPage, totalCards } = useSelector<RootState>(
    (state) => state.cards
  ) as IState;

  return (
    <div className="wrapper">
      <h1>Rick and Morty</h1>
      <SearchBar addSearch={fetchData} />
      <SelectCards defaultValue="" value={selectValue} onchange={selectCards} />
      <CardList />
      <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate} />
    </div>
  );
};

export default HomePage;
