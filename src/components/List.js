import React from 'react';
import Item from './Item'
import Button from './Button'
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-flow:row wrap;
  padding-bottom: 40px;
  
  outline: 2px solid gold;
    
  @media (min-width:576px) {
    position: relative;
  }
  
  @media (min-width:1300px) {
    width: 650px;
  }
`

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