import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Filter from './components/Filter/Filter'
import List from './components/List/List'
import Description from './components/Description/Description'
import styled from 'styled-components'
import {updateUrl, updateCollection} from './store/reducer'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif;
}

body {
  min-height: 100vh;
  background: rgba(241,231,103,1);
  background: linear-gradient(135deg, rgba(241,231,103,1) 0%, rgba(241,231,103,1) 61%, rgba(254,182,69,1) 100%);
}`

const Container = styled.div`
  display: flex;
`

function downloadPokemons(baseUrl, dispatch) {
  getPokemons(baseUrl)

  async function getPokemons(url) {
    let parsedList = await getList(url);
    let pokemons = await getItems(parsedList);
    dispatch(updateCollection(pokemons))

    function getList(url) {
      return fetch(url)
        .then(res => res.json())
        .then(data => {
          dispatch(updateUrl(data.next))
          return data.results // pokemons list
        })
    }

    function getItems(list) {
      let promises = [];
      for (let i = 0; i < list.length; i++) {
        let pokemonUrl = list[i]['url']
        promises.push(fetch(pokemonUrl));
      }
      return Promise.all(promises)
        .then( values => {
          return Promise.all(values.map(r => r.json()))
        })
    }
  }
};

function App() {
  const dispatch = useDispatch()
  const fetchUrl = useSelector(state => state.fetchUrl)
  const isDescriptionActive = useSelector(state => state.isDescriptionActive)
  const isAskedForDownload = useSelector(state => state.isAskedForDownload)

  useEffect( () => {
    downloadPokemons(fetchUrl, dispatch)
  }, [isAskedForDownload]);


  return (
    <>
      <Global />
      <Wrapper>

        <Header title={'Pokedex'} />

        <Filter />

        <Container>
          <List />

          {isDescriptionActive && <Description />}
        </Container>


      </Wrapper>
    </>
  );
}

export default App;
