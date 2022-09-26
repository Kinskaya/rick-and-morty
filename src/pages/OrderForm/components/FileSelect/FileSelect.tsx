import React from 'react';
import { InputProps } from '../../OrderForm';

const FileSelect = ({ label, register }: InputProps) => (
  <div className="form-control">
    <label>
      Upload file
      <input type="file" {...register(label, { required: true })} accept=".jpg, .jpeg, .png" />
    </label>
  </div>
);

export default FileSelect;
