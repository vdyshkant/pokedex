import React from 'react';
import styled from 'styled-components'

const TagContainer = styled.div`
  .tag-element {
      display: inline-block;
      font-style: normal;
      padding: 5px 15px;
      border-radius: 5px;
      border: 1px solid red;
      margin-right: 4px;
      
      filter: brightness(1);
      transition: filter 300ms ease-out;
      
      &:hover {
        filter: brightness(1.1);
      }
      
      &:last-child {
        margin-right: 0;
      }
  }
`

const Tags = ({tags}) => {
  return (
    <TagContainer>
      {tags.map( (item) => {
        let tag = item.type['name'];
        return <i className='tag-element' key={item.slot}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</i>
      } )}
    </TagContainer>
  );
};

export default Tags;