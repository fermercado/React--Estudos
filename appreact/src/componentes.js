import React from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './header';
const Teste = () => {
  const active = false;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};
const App = () => {
  return (
    <React.Fragment>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default App;
