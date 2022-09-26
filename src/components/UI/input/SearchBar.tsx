import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData, TAPIData } from '../../../redux/cardsSlice';
import { AppDispatch } from '../../../redux/store';

import './SearchBar.css';

interface ISearch {
  addSearch(params: TAPIData): void;
}

const SearchBar: React.FunctionComponent<ISearch> = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setValue(event.target.value);
    }
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(fetchData({ searchValue: value }));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <i className="material-icons">search</i>
      <input
        className="search-input"
        onChange={handleChange}
        type="text"
        value={value}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
