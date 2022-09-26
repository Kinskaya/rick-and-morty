import React from 'react';

export interface IModalCard {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
}

class ModalCard extends React.Component<IModalCard> {
  render() {
    const { ...item } = this.props;

    return (
      <div className="card">
        <img className="card-image" src={item.image} alt="item-image" />
        <p className="title">
          Name: <span>{item.name}</span>
        </p>
        <p className="title">
          Gender: <span>{item.gender}</span>
        </p>
        <p className="title">
          Status: <span>{item.status}</span>
        </p>
        <p className="title">
          Species: <span>{item.species}</span>
        </p>
      </div>
    );
  }
}

export default ModalCard;
