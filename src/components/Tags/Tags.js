import React from 'react';
import {TagContainer} from './TagContainer'

const Tags = ({tags}) => {
  return (
    <TagContainer>
      {tags.map( (item) => {
        let tag = item.type['name'];
        let a = ['grass', 'poison', 'fire', 'water', 'flying','bug',
          'bug', 'electric', 'water', 'flying', 'bug', 'normal',
          'ground', 'fairy', 'fighting', 'psychic'].map((item)=>{
          return item === tag ? `tag-element--${item}` : ''
        })

        const itemTagStyles = `
          tag-element
          ${a.join(' ')}
        `
        return <i className={itemTagStyles.replace('/\s/g', '')} key={item.slot}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</i>
      } )}
    </TagContainer>
  );
};

export default Tags;