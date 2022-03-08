import { useState } from 'react';

/**
 * @description Custon hook change state for input in to form
 * @param {*} initialStateForm
 * @returns [formValues, handleInputChange, setFormValues, reset] !! Array
 */
export const useForm = (initialStateForm = {}) => {
  const [formValues, setFormValues] = useState(initialStateForm);

  const reset = () => {
    setFormValues(initialStateForm);
  };

  const handleInputChange = (event: any) => {
    const { name, type, value, checked } = event.target;

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return [formValues, handleInputChange, setFormValues, reset];
};
