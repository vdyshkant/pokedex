import React from 'react';

const DescriptionItem = ({param, value}) => {
  return (
    <div className="node">
      <div className="first-node">{param}</div>
      <div className="last-node">{value}</div>
    </div>
  );
};

export default DescriptionItem;