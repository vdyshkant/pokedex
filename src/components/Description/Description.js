import React from 'react';
import {DescriptionStyled, PokemonName, StatsTable} from './DescriptionStyled'

const Description = () => {
  return (
    <DescriptionStyled>

      <img className="avatar" src="https://picsum.photos/500/300" alt=""/>

      <PokemonName>pokemonname</PokemonName>

      <StatsTable>
          <div>Type</div>
          <div>Fire</div>
      </StatsTable>

    </DescriptionStyled>
  );
};

export default Description;