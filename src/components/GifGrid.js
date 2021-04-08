import React, { Fragment }from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItems from './GifGridItems';
const GifGrid = ({category}) => {

  const { data, loading } = useFetchGifs(category);
  
  return (
    <Fragment>
    <h3 className='animate__animated animate__backInLeft'>{category}</h3>
    {loading? <p className='animate__animated animate__pulse'>Loading...</p>: null}
    <div className='card-grid'>
      {data.map( img => (
        <GifGridItems 
          key={img.id}
          {...img}
        />
      ))}
    </div>  
    </Fragment>
  );
}
export default GifGrid;