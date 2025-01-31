import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <>
        <div>
          <div>{name}</div>
          <div>
            Buy {quantity} in {category}
          </div>
        </div>
      </>
    );
};

export default Item;