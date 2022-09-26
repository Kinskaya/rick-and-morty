import React from 'react';
import { useSelector } from 'react-redux';

import { TOrderForm } from '../../pages/OrderForm/OrderForm';
import { RootState } from '../../redux/store';
import { IState } from '../App/App';

import './OrderList.css';

export type TOrderList = {
  orders: TOrderForm[];
};

const OrderList: React.FunctionComponent<TOrderList> = () => {
  const { orders } = useSelector<RootState>((state) => state.orders) as IState;
  return (
    <div className="card-container">
      {orders.map((order, index) => {
        return (
          <div className="order" key={index}>
            <h3>Your order</h3>
            <p>
              Your Name:
              <span>{order.nameInput}</span>
            </p>
            <p>
              Delivery Date:
              <span>{order.dateInput}</span>
            </p>
            <p>
              Delivery Place:
              <span>{order.placeSelect}</span>
            </p>
            <p>
              Contact before delivery:
              <span>{order.reminder ? 'Yes' : 'No'}</span>
            </p>
            <p>
              I want to receive notifications about promo:
              <span>{order.isToggled ? 'Yes' : 'No'}</span>
            </p>
            <p>
              File:
              <span>{order.selectedFile?.name}</span>
            </p>
            <div className="order-image">
              <img
                src={URL.createObjectURL(order.selectedFile as File)}
                alt={order.selectedFile?.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
