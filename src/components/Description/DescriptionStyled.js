import styled from "styled-components";

export const DescriptionStyled = styled.div`
  border: 2px solid gray;

  position: sticky;
  top: 20px;
  margin-left: 20px;
  
  height: fit-content;
  padding: 1rem;
  width: 45%;
  
  @media (min-width:576px) {
    max-width: 220px;
    width: 100%;
  }
    
  @media (min-width:768px) {
    max-width: 240px;
    margin-top: 100px;
  }
  
  @media (min-width:1300px) {
    max-width: 330px;
    margin-top: 200px;
  }
  
  .avatar {
    height: auto;
    max-width: 100%;
    margin-bottom: 0.8rem;
  }
`
export const PokemonName = styled.h2`
  text-align: center;
`

export const StatsTable = styled.div`
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.4rem;
    
  .node {
    display: grid;
    flex-flow:row wrap;
    grid-template-columns: 2fr 1fr;
    border: 1px solid #000;
    border-bottom: none;
    
    &:last-child {
    border-bottom: 1px solid #000;
    }
    
    .first-node {
      border-right: 1px solid #000;
    }
  }
`