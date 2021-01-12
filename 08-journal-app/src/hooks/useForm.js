import {useState} from 'react';

export const useForm = (initialStateForm = {}) => {
  const [formValues, setValues] = useState(initialStateForm);

  const reset = () => {
    setValues(initialStateForm);
  };

  const handleInputChange = ({target}) => {
    setValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleInputChange, reset];
};
