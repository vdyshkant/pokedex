import styled from "styled-components";

export const ItemContainer = styled.div`
  border: 2px solid #a0a0a0;

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
  }
  
  .name {
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1rem;
    margin-bottom: 5px;
  }
`