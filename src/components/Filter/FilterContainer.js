
import styled from 'styled-components'

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  
  .filter-list {
    list-style-type: none;
  }
  
  .filter-item {
    display: inline-block;
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 4px;
    background: transparent;
    transition: 300ms ease-out;
    color: #000;
    cursor: pointer;
    
    &.active {
      background-color: deepskyblue;
    }
    
    &:hover {
      background: steelblue;
      color: #fff;
    }
  }
`