import React from 'react';
import { InputProps } from '../../OrderForm';

const Toggle = ({ label, register }: InputProps) => (
  <div className="form-control">
    <span className="toggle-desc">I want to receive notifications about promo</span>
    <label className="toggle-switch">
      <input type="checkbox" {...register(label)} />
      <span className="switch">Yes</span>
    </label>
  </div>
);

export default Toggle;
