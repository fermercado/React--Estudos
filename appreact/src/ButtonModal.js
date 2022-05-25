import React from 'react';

const buttonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};

export default buttonModal;
