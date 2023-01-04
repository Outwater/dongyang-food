import React, { useCallback, useEffect, useState } from "react";

const useForm = <T>({ initialValues, validate, onSubmit }) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(values);
    setErrors(errors);

    if (Object.values(errors).some((value) => value)) {
      return;
    }
    onSubmit(values);
  };

  const runValidator = useCallback(() => validate(values), [values]);

  useEffect(() => {
    const errors = runValidator();
    setErrors(errors);
  }, [runValidator]);
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
