import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ModalCard from '../../components/ModalCard/ModalCard';
import { RootState } from '../../redux/store';
import { ICard } from '../../components/Card/Card';

import './CardPage.css';

const CardPage = () => {
  const params = useParams();
  const info = useSelector<RootState>((state) => state.cards.info) as ICard[];

  return (
    <div className="card-page">
      <p className="back-home-link">
        Go <Link to="/">Home</Link>
      </p>
      {info.map((el) => {
        if (el.id.toString() === params.id) {
          return (
            <ModalCard
              key={el.id}
              id={el.id}
              name={el.name}
              gender={el.gender}
              image={el.image}
              species={el.species}
              status={el.status}
            />
          );
        }
      })}
    </div>
  );
};

export default CardPage;
