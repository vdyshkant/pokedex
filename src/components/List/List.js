import React from 'react';
import {useSelector} from 'react-redux'
import Item from '../Item/Item'
import Button from '../Button/Button'
import {ListContainer} from "./ListContainer";

const List = () => {
  const itemCollection = useSelector( state => state.itemCollection )

  return (
    <ListContainer>
      { itemCollection.map( (item, i) => {
        return <Item key={i} pokemon={item} />
      } ) }
      <Button />
    </ListContainer>
  );
};

export default List;
