import React, {Fragment, useState} from 'react';
import AddGategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {


  const [addcategory, setAddCategory] = useState([])

  return (  
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddGategory 
        setAddCategory={setAddCategory}
      />
      <hr />

      <ol>
        {!addcategory 
        ? 
          null 
        :
          addcategory.map(category => (
            <GifGrid 
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </Fragment>
  );
}
 
export default GifExpertApp;