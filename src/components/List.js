import React from 'react';

const List = () => {
  const n = 8
  return (
    <>
      {[...Array(n)].map((e, i) => <div key={i} style={{width: '120px', height: '100px',}}>elem {i}</div>) }
    </>
  );
};

export default List;