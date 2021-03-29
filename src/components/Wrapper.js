import React from 'react';
import styled from 'styled-components'

const Container = styled.main`
    outline: 2px dashed dodgerblue;
    
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    
    @media (min-width:576px) {
      max-width: 540px;
      padding: 0;
    }
    
    @media (min-width:768px) {
      max-width: 720px;
    }
    
    @media (min-width:1300px) {
      max-width: 1024px;
    }
`
const Wrapper = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Wrapper;