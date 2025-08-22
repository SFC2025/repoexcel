export const validateForm = (data, fields) => {
  const errors = {};

  fields.forEach((field) => {
    if (
      field.required &&
      (!data[field.name] || data[field.name].trim() === "")
    ) {
      errors[field.name] = `${field.label} es requerido`;
    }

    if (field.type === "email" && data[field.name]) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data[field.name])) {
        errors[field.name] = "Formato de email inválido";
      }
    }

    if (field.type === "number" && data[field.name]) {
      const value = Number(data[field.name]);
      if (field.min !== undefined && value < field.min) {
        errors[field.name] = `Valor mínimo: ${field.min}`;
      }
      if (field.max !== undefined && value > field.max) {
        errors[field.name] = `Valor máximo: ${field.max}`;
      }
    }
  });

  return errors;
};

export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0;
};
