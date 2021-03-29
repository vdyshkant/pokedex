import React from 'react';
import {useSelector} from 'react-redux'
import Item from '../Item/Item'
import Button from '../Button/Button'
import {ListContainer} from "./ListContainer";

const List = () => {
  const list = useSelector( state => state.items )
  return (
    <ListContainer>
      { list.map( (item, i) => {
        // console.log('ID:::', item.id)
        return <Item key={i} pokemon={item} />
      } ) }
      <Button />
    </ListContainer>
  );
};

export default List;