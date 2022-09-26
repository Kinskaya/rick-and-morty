import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.css';

export interface ICard {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  created: string;
  origin: {
    name: string;
  };
}

const Card: React.FunctionComponent<ICard> = ({ ...item }) => {
  const router = useNavigate();

  return (
    <div className="card" onClick={() => router(`/${item.id}`)}>
      <img className="card-image" src={item.image} alt="item-image" />
      <p className="title">
        Name: <span>{item.name}</span>
      </p>
      <p className="title">
        Gender: <span>{item.gender}</span>
      </p>
    </div>
  );
};

export default Card;
