import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    {props.state.list.map(item =>
      <GroceryItem item={item} />
    )}
  </div>
)

export default GroceryList;
