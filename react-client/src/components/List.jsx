import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({items}) => (
  <div id="list">
  	<h2>exercises</h2>
  	<ul>{ items.map(item => <ListItem item={item}/>)}</ul>
  </div>
)

export default List;