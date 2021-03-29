import React from 'react';
import Item from '../Item/Item'
import Button from '../Button/Button'
import {ListContainer} from "./ListContainer";

const List = () => {
  const n = 12
  return (
    <ListContainer>
      {[...Array(n)].map((e, i) => <Item key={i} style={{width: '120px', height: '100px',}} />) }

      <Button />
    </ListContainer>
  );
};

export default List;