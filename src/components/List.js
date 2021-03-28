import React from 'react';
import Item from './Item'
import Button from './Button'

const List = () => {
  const n = 8
  return (
    <>
      {[...Array(n)].map((e, i) => <Item key={i} style={{width: '120px', height: '100px',}} />) }

      <Button />
    </>
  );
};

export default List;