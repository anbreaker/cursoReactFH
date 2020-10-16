import React, {useState, useEffect} from 'react';
import {GifGridItem} from './GifGridItem';
import {getGifs} from './helpers/getGifs';

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
