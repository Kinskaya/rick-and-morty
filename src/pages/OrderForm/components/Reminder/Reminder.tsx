import React from 'react';
import { InputProps } from '../../OrderForm';

const Reminder = ({ label, register }: InputProps) => (
  <div className="form-control">
    <label>Contact before delivery</label>
    <input type="checkbox" {...register(label)} />
  </div>
);

export default Reminder;
