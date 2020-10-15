import React, {useState} from 'react';

// Functional Component

const GifExpertApp = () => {
  // const categories = ['Simpsons', 'Drangon Ball', 'Futurama'];
  const [categories, setCategories] = useState(['Simpsons', 'Drangon Ball', 'Futurama']);

  const handleAdd = () => {
    // setCategories([...categories, 'Star Wars']);
    setCategories((categoriesItem) => [...categoriesItem, 'Star Wars']);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
