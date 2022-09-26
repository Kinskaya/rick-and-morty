import React from 'react';
import { InputProps } from '../../OrderForm';

const NameInput = ({ label, register }: InputProps) => (
  <div className="form-control">
    <label>Add name</label>
    <input
      type="text"
      {...register(label, { required: 'Name can not be empty!', minLength: 1 })}
      placeholder="Your name"
    />
  </div>
);

export default NameInput;
