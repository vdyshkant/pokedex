import React from 'react';

const Tags = ({tags}) => {
  return (
    <div>
      {tags.map( (item) => {
        let tag = item.type['name'];
        return <i key={item.slot}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</i>
      } )}
    </div>
  );
};

export default Tags;