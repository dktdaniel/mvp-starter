import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({items}) => (
  <div>
    <h4> List Component </h4>
    { items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;