import React, { useState } from 'react';
import './image.css';

export const ImageFltier = ({ imageData }) => {
  const [filter, setFilter] = useState('category1');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className="filterable-gallery">
      <div className="filter-buttons">
        <button class="bn54" onClick={() => handleFilterChange('category1')}>Category 1</button>
        <button class="bn54" onClick={() => handleFilterChange('category2')}>Category 2</button>
      </div>

      <div className="images">
        {imageData.map((image) => {
          if (image.category === filter) {
            return (
              <img key={image.id} src={image.url} alt={image.alt} />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
