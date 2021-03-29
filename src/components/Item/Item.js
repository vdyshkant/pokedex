import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {ItemContainer} from './ItemContainer'
import Tags from '../Tags'

const Item = ({pokemon}) => {
  const dispatch = useDispatch()
  const isActive = useSelector(state => state.isDescriptionActive)

  let {
    name = '-',
    id,
  } = pokemon;

  name = name.charAt(0).toUpperCase() + name.slice(1)

  const showPokemonDescription = () => {
    dispatch({type: 'SET_CURRENT_POKEMON_ID', payload: pokemon.id})
    if (isActive === false) {
      dispatch({type: 'MAKE_DESCRIPTION_ACTIVE'})
    }
  }

  return (
    <ItemContainer onClick={ () => showPokemonDescription() }>
      <img className='avatar' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

      <h2>{name}</h2>

      <Tags tags={pokemon.types}/>
    </ItemContainer>
  );
};

export default Item;