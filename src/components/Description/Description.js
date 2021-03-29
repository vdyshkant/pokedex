import React from 'react';
import {useSelector} from 'react-redux'
import { createSelector } from "reselect";
import DescriptionItem from '../DescriptionItem'
import {DescriptionStyled, PokemonName, StatsTable} from './DescriptionStyled'

function getStats(stats) {
  return stats.map(stat => {
    return {
      name: preetifyTitle(stat.stat.name),
      value: stat.base_stat
    }
  })
}

function preetifyTitle(title){
  let name = title.replace('special', 'SP');
  name = name.replace(/-/g, " ");

  if (name.length < 3) {
    name = name.toUpperCase()
  } else {
    name = name.charAt(0).toUpperCase() + name.slice(1)
  }
  return name;
}

const pokemonSelector = createSelector(
  state => state.items,
  state => state.currentPokemonId,
  (items, activePokemonId) => {
    const data = items.filter(({ id }) => id === activePokemonId);

    if (data.length < 1) {
      return {
        id: 1,
        name: '000',
        weight: '000',
        stats: [
          {name:'attack',value:'000'},
          {name:'defense',value:'000'},
          {name:'hp',value:'000'},
          {name:'specialAttack',value:'000'},
          {name:'specialDefense',value:'000'},
          {name:'speed',value:'000'},
        ],
        moves: '000',
      }
    }
    const {
      id,
      name,
      weight,
      stats: pokemonStats,
    } = data[0];
    return {
      id,
      name,
      weight,
      stats: getStats(pokemonStats),
      moves: data[0].moves.length,
    }
  }
)

const Description = () => {
  const pokemon = useSelector(pokemonSelector)

  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  const id = `#${('00' + pokemon.id).slice(-3)}`

  return (
    <DescriptionStyled>
      <img className='avatar' src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt=""/>

      <PokemonName>{`${name} ${id}`}</PokemonName>

      <StatsTable>
        <DescriptionItem param='Type' value='Fire' />
        {console.log(pokemon)}
        {pokemon.stats.map(({name,value}) => (
          <DescriptionItem key={name} param={name} value={value} />
        ))}

        <DescriptionItem param='Weight' value={pokemon.weight} />
        <DescriptionItem param='Total moves' value={pokemon.moves} />
      </StatsTable>
    </DescriptionStyled>
  );
};

export default Description;