import React from 'react';

const ListItem = ({item}) => (
  <div>
    { item.activity } - { item.calories } calories
  </div>
)

export default ListItem;