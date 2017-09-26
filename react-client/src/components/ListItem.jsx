import React from 'react';

const ListItem = ({item}) => (
  <li>
    { item.activity } ({ item.calories } calories)
  </li>
)

export default ListItem;