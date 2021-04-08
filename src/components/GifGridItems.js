import React from 'react';

const GifGridItems = ({id, url, title}) => {

  // console.log({id,title,url});

  return (  
    <div className='card animate__animated animate__fadeIn'>
      <h6>{title}</h6>
      <img 
        src={url}
        alt={title}
      />
    </div>
  );
}
 
export default GifGridItems;