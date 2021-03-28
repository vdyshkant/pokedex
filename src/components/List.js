import React from 'react';
import Item from './Item'

const List = () => {
  const n = 8
  return (
    <>
      {[...Array(n)].map((e, i) => <Item key={i} style={{width: '120px', height: '100px',}} />) }
    </>
  );
};

export default List;