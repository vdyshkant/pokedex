import React from 'react';
import {ButtonStyled} from './ButtonStyled'
import {useDispatch} from 'react-redux'
import {downloadItems} from '../../store/reducer'

const Button = () => {
  const dispatch = useDispatch()

  return (
    <ButtonStyled onClick={() => dispatch(downloadItems())}>
      Load More
    </ButtonStyled>
  );
};

export default Button;