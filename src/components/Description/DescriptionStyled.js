import styled from "styled-components";

export const DescriptionStyled = styled.div`
  outline: 2px solid tan;

  position: sticky;
  top: 20px;
  margin-top: 200px;
  margin-left: 20px;
  
  height: fit-content;
  max-width: 360px;
  padding: 1rem;
  
  @media (min-width:1300px) {
    width: 380px;
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
  background: tomato;
  border: 1px solid #000;  
  display: grid;
  flex-flow:row wrap;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1.4rem;
  
  & > div {
    border: 1px solid #000;
  }
`