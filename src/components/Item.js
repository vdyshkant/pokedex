import React from 'react';
import styled from "styled-components";

const ItemContainer = styled.div`
  outline: 2px dashed magenta;

  min-height: 180px; 
  margin: 0 20px 20px 0;
  padding: 10px;
  
  @media (min-width:576px) {
    width: 45%;
    
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
  
  @media (min-width:768px) {
    width: 30%;
    
    &:nth-child(2n) {
      margin-right: 20px;
    }
    
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
 
  .avatar {
    height: auto;
    max-width: 100%;
    margin-bottom: 0.8rem;
    max-height: 180px;
  }
  
  .name {
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
  }
`
const Item = () => {
  return (
    <ItemContainer>
      <img className="avatar" src="https://picsum.photos/400/300" alt=""/>

      <div className='name'>pokemon_name</div>
    </ItemContainer>
  );
};

export default Item;