import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import List from './components/List/List'
import Description from './components/Description'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

function App() {
  const dispatch = useDispatch()

  function getList() {
    return new Promise((resolve, reject)=>{
      const res = fetch('https://pokeapi.co/api/v2/pokemon/?limit=4')
      resolve(res)
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch({type: 'ADD_INITIAL_POKEMON_LIST', payload: data.results})
        return data.results
      })
  }

  function getPokemons(index) {
    let promises = [];
    for (let i = 1; i <= index; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    return Promise.all(promises)
      .then( values => {
        return Promise.all(values.map(r => r.json()))
      })
  }

  async function getPokemonsData() {
    let limitedList = await getList();
    dispatch({type: 'ADD_INITIAL_POKEMON_LIST', payload: limitedList})

    let pokemons = await getPokemons(limitedList.length);
    dispatch({type: 'ADD_POKEMON_DATA_TO_COLLECTION', payload: pokemons})
  }

  useEffect( () => {
    getPokemonsData();
  }, []);

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
