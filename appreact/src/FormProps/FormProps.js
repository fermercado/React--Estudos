import React from 'react';
import ButtonProps from './ButtonProps';
import InputProps from './InputProps';

const FormProps = () => {
  const arr = ['item 1', 'item 2'];
  return (
    <div>
      <InputProps id="email" label="Email" required />
      <InputProps id="password" type="password" label="Password" />
      <ButtonProps itens={arr} />
    </div>
  );
};

export default FormProps;
