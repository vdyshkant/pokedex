import React from 'react';
import Header from './components/Header'
import List from './components/List'
import Description from './components/Description'

function App() {
  return (
    <div>

      <Header title={'Pokedex'} />

      <List />

      <Description />


    </div>
  );
}

export default App;
