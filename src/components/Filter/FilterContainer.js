
import styled from 'styled-components'

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  
  .filter-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .filter-item {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #0371d5;
    border-radius: 5px;
    background: transparent;
    transition: 300ms ease-out;
    color: #000;
    cursor: pointer;
    margin-right: 4px;
    margin-bottom: 5px;
    
    &.active {
      background-color: deepskyblue;
    }
    
    &:hover {
      background: steelblue;
      color: #fff;
    }
  }
`