import styled from "styled-components";

export const ListContainer = styled.div`
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