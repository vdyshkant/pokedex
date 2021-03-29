import React from 'react';
import styled from 'styled-components'

const TopRow = styled.div`
  border: 2px solid grey;
  text-align: center;
  width: 80%;
  margin: 0 0 20px auto;
  
  h1 {
    font-weight: 400;
    padding: 5px 0;
  }
`

const Header = ({title}) => {
  return (
    <TopRow>
      <h1>{title}</h1>
    </TopRow>
  );
};

export default Header;