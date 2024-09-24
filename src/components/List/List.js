import React from 'react';
import './List.scss';

const List = ({ item }) => {
  return (
    <div className="list-item" tabIndex={0} aria-label={item.title} >
      <img src={item.image} alt={item.title} className="list-item-image" />
      <div className="list-item-content">
        <h3 className="list-item-title">{item.title}</h3>
        <p className="list-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default List;
