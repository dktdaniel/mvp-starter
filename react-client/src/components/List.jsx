import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({items}) => (
  <div>{ items.map(item => <ListItem item={item}/>)}</div>
)

export default List;