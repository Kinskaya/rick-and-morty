import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { ICard } from '../../Card/Card';
import { sortCards } from '../../../redux/cardsSlice';

import './SelectCards.css';

export type TSortOption = {
  selectValue: string;
  selectName: string;
};

export interface ISort {
  defaultValue: string;
  value: string;
  onchange(sort: string): void;
}

const SelectCards: React.FunctionComponent<ISort> = () => {
  const info = useSelector<RootState>((state) => state.cards.info) as ICard[];
  const dispatch = useDispatch();

  const options: TSortOption[] = [
    { selectValue: 'name', selectName: 'name' },
    { selectValue: 'created', selectName: 'created date' },
    { selectValue: 'origin', selectName: 'origin name' },
  ];
  const defaultValue = 'select';
  const value = useSelector<RootState>((state) => state.cards.selectValue) as string;

  return (
    <div className="select-wrap">
      {info.length > 0 && (
        <>
          <label>Sort by:</label>
          <select value={value} onChange={(event) => dispatch(sortCards(event.target.value))}>
            <option disabled value="">
              {defaultValue}
            </option>
            {options.map((option: TSortOption) => (
              <option key={option.selectValue} value={option.selectValue}>
                {option.selectName}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default SelectCards;
