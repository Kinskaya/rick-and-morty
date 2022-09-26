import React from 'react';
import { useSelector } from 'react-redux';

import Card, { ICard } from '../Card/Card';

import '../Card/Card.css';

import { RootState } from '../../redux/store';

/*export interface ICardList {
  info: ICard[];
  loading: boolean;
  error: string;
}*/
const CardList = () => {
  const info = useSelector<RootState>((state) => state.cards.info) as ICard[];
  const error = useSelector<RootState>((state) => state.cards.error) as string;
  const loading = useSelector<RootState>((state) => state.cards.loading) as string;

  if (error) {
    return <h2 className="loading">{error}</h2>;
  }
  if (loading || !info) {
    return <h2 className="loading">Loading...</h2>;
  }
  return (
    <div className="card-container">
      {info.map((item: ICard) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            gender={item.gender}
            image={item.image}
            status={item.status}
            species={item.species}
            created={item.created}
            origin={item.origin}
          />
        );
      })}
    </div>
  );
};

export default CardList;
