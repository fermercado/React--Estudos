import React from 'react';

const ProdutoEffect = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div style={{ height: '200vh' }}>Meu produto</div>;
};

export default ProdutoEffect;
