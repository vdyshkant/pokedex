import React from 'react';
import {ItemContainer} from './ItemContainer'

const Item = () => {
  return (
    <ItemContainer>
      <img className="avatar" src="https://picsum.photos/400/300" alt=""/>

      <div className='name'>pokemon_name</div>
    </ItemContainer>
  );
};

export default Item;