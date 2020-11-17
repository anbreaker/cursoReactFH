import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('handleSubmit Run', inputValue);

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setinputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
