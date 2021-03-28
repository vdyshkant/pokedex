import React from 'react';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import List from './components/List'
import Description from './components/Description'

function App() {
  return (
    <Wrapper>

      <Header title={'Pokedex'} />

      <List />

      <Description />


    </Wrapper>
  );
}

export default App;
