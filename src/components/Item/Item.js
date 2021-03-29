import React from 'react';
import {useSelector} from 'react-redux'
import {ItemContainer} from './ItemContainer'

const Item = ({pokemon}) => {
  const currentId = useSelector(state => state.currentPokemonId)

  let {
    name = '-',
    id,
  } = pokemon;

  name = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <ItemContainer>
      <img className='avatar' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

      <h2>{name}</h2>
    </ItemContainer>
  );
};

export default Item;