import React from 'react';
import {useSelector} from 'react-redux'
import {ItemContainer} from './ItemContainer'
import Tags from '../Tags'

const Item = ({pokemon}) => {

  let {
    name = '-',
    id,
  } = pokemon;

  name = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <ItemContainer>
      {console.log('pokemon', pokemon.types)}
      <img className='avatar' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

      <h2>{name}</h2>

      <Tags tags={pokemon.types}/>
    </ItemContainer>
  );
};

export default Item;