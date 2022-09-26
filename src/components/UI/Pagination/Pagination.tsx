import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../App/App';
import { AppDispatch, RootState } from '../../../redux/store';
import { fetchData, paginate } from '../../../redux/cardsSlice';

import './Pagination.css';

type TPagination = {
  cardsPerPage: number;
  totalCards: number;
  paginate(num: number): void;
};

const Pagination: React.FunctionComponent<TPagination> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { error, totalPages, currentPage, searchValue } = useSelector<RootState>(
    (state) => state.cards
  ) as IState;

  return (
    <div className="pagination">
      {!error &&
        [...Array(totalPages)].map((el, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'page page-current' : 'page'}
            onClick={() => {
              dispatch(paginate(index + 1));
              if (searchValue)
                dispatch(fetchData({ searchValue: searchValue, currentPage: index + 1 }));
            }}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
