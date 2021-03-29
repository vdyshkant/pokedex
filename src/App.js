import React from 'react';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import List from './components/List'
import Description from './components/Description'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

function App() {
  return (
    <Wrapper>

      <Header title={'Pokedex'} />

      <Container>
        <List />

        <Description />
      </Container>


    </Wrapper>
  );
}

export default App;
