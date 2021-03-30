import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {ItemContainer} from './ItemContainer'
import Tags from '../Tags'

const Item = ({pokemon}) => {
  const dispatch = useDispatch()
  const isActive = useSelector(state => state.isDescriptionActive)
  const currentCategory = useSelector(state => state.currentCategory)
  const [isHidden, setIsHidden] = useState('')

  useEffect( () => {
    if (pokemon) {
      const tagFilterFlags = pokemon.types.reduce((acc, item, i) => {
        const tagAlias = item.type.name.toString()
        switch (currentCategory) {
          case null:
          case 'all':
            acc.push(true)
            break;
          case (tagAlias):
            acc.push(true)
            break;
          default:
            acc.push(false)
        }
        return acc
      }, [])

      tagFilterFlags.some(element => element === true)
        ? setIsHidden('')
        : setIsHidden('is-hidden')
    }
  }, [currentCategory])


  let {
    name = '-',
    id,
  } = pokemon;

  name = name.charAt(0).toUpperCase() + name.slice(1)

  const showPokemonDescription = () => {
    dispatch({type: 'SET_CURRENT_POKEMON_ID', payload: pokemon.id})
    if (isActive === false) {
      dispatch({type: 'MAKE_DESCRIPTION_ACTIVE'})
    }
  }

  return (
    <ItemContainer className={isHidden} onClick={ () => showPokemonDescription() }>
      <img className='avatar' src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

      <h2 className='name'>{name}</h2>

      <Tags tags={pokemon.types}/>
    </ItemContainer>
  );
};

export default Item;