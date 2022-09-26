import React from 'react';
import { InputProps } from '../../OrderForm';

const DateInput = ({ label, register }: InputProps) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  return (
    <div className="form-control">
      <label>Delivery date</label>
      <input
        type="date"
        {...register(label, { required: 'Date can not be empty!' })}
        min={currentDate}
      />
    </div>
  );
};

export default DateInput;
