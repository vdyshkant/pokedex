import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  background: dodgerblue;
  border-radius: 5px;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  
  @media (min-width:576px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`