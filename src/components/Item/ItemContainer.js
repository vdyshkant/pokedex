import styled from "styled-components";

export const ItemContainer = styled.div`
  outline: 2px dashed magenta;

  min-height: 180px; 
  height: fit-content;
  padding: 10px;
  
  &.is-hidden {
    display: none;
  }
 
  .avatar {
    height: auto;
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.8rem;
    max-height: 180px;
  }
  
  .name {
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1rem;
    margin-bottom: 5px;
  }
`