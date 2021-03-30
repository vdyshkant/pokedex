import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { createSelector } from "reselect";
import {setCurrentCategory} from '../../store/reducer'
import {FilterContainer} from './FilterContainer'

const tagsSelector = createSelector(
  state => state.itemCollection,
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
    dispatch(setCurrentCategory(item))
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