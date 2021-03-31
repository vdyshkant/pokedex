import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 60px;
  width: 50%;
    
  @media (min-width:576px) {
    position: relative;
    grid-template-columns: 1fr 1fr;
    width: 320px;
  }
    
  @media (min-width:768px) {
    width: 460px;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (min-width:1300px) {
    width: 680px;
  }
`