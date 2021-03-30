import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding-bottom: 60px;
  
  outline: 2px solid gold;
    
  @media (min-width:576px) {
    position: relative;
  }
  
  @media (min-width:1300px) {
    width: 650px;
  }
`