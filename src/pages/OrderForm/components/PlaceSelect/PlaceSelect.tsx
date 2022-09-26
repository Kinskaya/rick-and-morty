import React from 'react';
import { InputProps } from '../../OrderForm';

const PlaceSelect = ({ label, register }: InputProps) => (
  <div className="form-control">
    <label>Delivery place</label>
    <select {...register(label, { required: 'Place can not be empty!' })}>
      <option value="">Select place</option>
      <option value="Minsk">Minsk</option>
      <option value="Gomel">Gomel</option>
      <option value="Mogilev">Mogilev</option>
      <option value="Brest">Brest</option>
      <option value="Grodno">Grodno</option>
    </select>
  </div>
);

export default PlaceSelect;
