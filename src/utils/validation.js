export function validateForm(values, fields) {
  const errors = {};
  for (const f of fields) {
    const v = values[f.name];

    if (f.required) {
      const empty =
        f.type === "checkbox-group" ? v?.length === 0 : v === "" || v == null;
      if (empty) {
        errors[f.name] = "Campo obligatorio";
        continue;
      }
    }

    if (f.type === "email" && v) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(v)) errors[f.name] = "Email inválido";
    }
    if (f.type === "number" && v !== "") {
      const n = Number(v);
      if (Number.isNaN(n)) errors[f.name] = "Debe ser numérico";
      if (f.min != null && n < f.min) errors[f.name] = `Mínimo ${f.min}`;
    }
    if (f.maxLength && v && v.length > f.maxLength) {
      errors[f.name] = `Máximo ${f.maxLength} caracteres`;
    }
  }
  return errors;
}

export const isFormValid = (errs) => Object.keys(errs).length === 0;
