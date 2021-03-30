import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { createSelector } from "reselect";
import styled from 'styled-components'
import {ItemContainer} from "./Item/ItemContainer";

const FilterContainer = styled.div`
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

const tagsSelector = createSelector(
  state => state.items,
  (items) => {

    const arr = items.reduce( (acc, currentValue, i) => {
      for (let k = 0; k < currentValue.types.length; k++) {
        acc.push(currentValue.types[k].type.name)
      }
      return acc
    }, [])

    return [...new Set(arr)]
  }
)

const Filter = () => {
  const dispatch = useDispatch()
  const list = useSelector(tagsSelector)
  const currentCategory = useSelector(state => state.currentCategory)

  const showTheOnlyCategory = (item) => {
    dispatch({type: 'CURRENT_CATEGORY', payload: item})
  }

  const allItemsClasses = `
    filter-item 
    ${currentCategory === 'all' ? 'active' : ''}
    ${currentCategory === null ? 'active' : ''}
  `
  return (
    <FilterContainer>
      <ul className='filter-list'>
        <li onClick={() => showTheOnlyCategory('all')} className={allItemsClasses}>All</li>
        {list.map( item => {
          const itemClasses = `
            filter-item
            ${currentCategory === item ? 'active' : ''}
          `
            return <li key={item} onClick={() => showTheOnlyCategory(item)} className={itemClasses}>{item}</li>
        } )}
      </ul>
    </FilterContainer>
  );
};

export default Filter;