import React from 'react';

const buttonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

export default buttonModal;
