import React from 'react';
import ProdutoEffect from './ProdutoEffect';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <ProdutoEffect />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

export default App;
