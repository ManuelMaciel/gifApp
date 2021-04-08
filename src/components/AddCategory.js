import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setAddCategory}) => {

  const [ inputChange, setInputChange ] = useState('');

  const handleInputChange = e => {
    setInputChange(e.target.value)
  }
  const handleInputSubmit = e => {
    e.preventDefault();
    if(inputChange.trim() === ''){
      return;
    }
    setAddCategory( cats => [ inputChange, ...cats]);
    setInputChange('');
  }

  return (  
    <form
      onSubmit={handleInputSubmit}
    >
      <input 
        type='text'
        value={inputChange}
        onChange={handleInputChange}
        placeholder='Type a query...'
      />
    </form>
  );
}

AddCategory.propTypes = {
  setAddCategory: PropTypes.func.isRequired
}
 
export default AddCategory;