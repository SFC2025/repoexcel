import React from "react";

export default function FormField(props) {
  const {
    type = "text",
    name,
    label,
    value,
    onChange,
    placeholder = "",
    options = [],
    required = false,
    min,
    max,
    step,
    rows = 4,
  } = props;

  // ------- SELECT -------
  if (type === "select") {
    return (
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        <select
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccionar…</option>
          {options.map((opt) => (
            <option
              key={typeof opt === "string" ? opt : opt.value}
              value={typeof opt === "string" ? opt : opt.value}
            >
              {typeof opt === "string" ? opt : opt.label ?? opt.value}
            </option>
          ))}
        </select>
      </label>
    );
  }

  // ------- RADIO (permite “destildar”) -------
  if (type === "radio") {
    const handleRadio = (opt) => {
      const next = value === opt ? "" : opt; // destildar si hace click de nuevo
      onChange({ target: { name, value: next } });
    };
    return (
      <fieldset className="block">
        <legend className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </legend>
        <div className="flex flex-wrap gap-4">
          {options.map((opt) => {
            const val = typeof opt === "string" ? opt : opt.value;
            const text = typeof opt === "string" ? opt : opt.label ?? opt.value;
            return (
              <label key={val} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name={name}
                  value={val}
                  checked={value === val}
                  onChange={() => handleRadio(val)}
                />
                <span>{text}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }

  // ------- CHECKBOX GROUP (selección múltiple) -------
  if (type === "checkbox-group") {
    const arr = Array.isArray(value) ? value : [];
    const toggle = (opt) => {
      const next = arr.includes(opt)
        ? arr.filter((v) => v !== opt)
        : [...arr, opt];
      onChange({ target: { name, value: next } }); // compatible con tu handleInputChange
    };
    return (
      <fieldset className="block">
        <legend className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </legend>
        <div className="flex flex-wrap gap-4">
          {options.map((opt) => {
            const val = typeof opt === "string" ? opt : opt.value;
            const text = typeof opt === "string" ? opt : opt.label ?? opt.value;
            return (
              <label key={val} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={arr.includes(val)}
                  onChange={() => toggle(val)}
                />
                <span>{text}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }
  // ------- SUBTÍTULO / DIVIDER -------
  if (type === "divider") {
    return (
      <div className="md:col-span-2">
        <h3 className="text-base font-semibold text-gray-700 mb-2">{label}</h3>
        <div className="h-px w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-2" />
      </div>
    );
  }
  // ------- TEXTAREA -------
  if (type === "textarea") {
    return (
      <label className="block">
        <span className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
        <textarea
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
    );
  }

  // ------- INPUT por defecto: text/number/date/email/etc -------
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}
