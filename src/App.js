import React, { useState } from "react";
import { motion } from "framer-motion";
import FormHeader from "./components/FormHeader";
import FormField from "./components/FormField";
import FormPreview from "./components/FormPreview";
import { formFields, initialFormData } from "./data/formConfig";
import { validateForm, isFormValid } from "./utils/validation";

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData, formFields);
    setErrors(newErrors);
    setIsSubmitted(isFormValid(newErrors));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  // Requeridos completos
  const hasRequiredData = formFields
    .filter((field) => field.required)
    .every((field) => formData[field.name] && formData[field.name].trim() !== "");

  // Validez final para habilitar export
  const isValid = isSubmitted && hasRequiredData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <FormHeader
          title="Formulario Profesional"
          subtitle="Complete sus datos para generar un reporte en Excel"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      className={field.type === "textarea" ? "md:col-span-2" : ""}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <FormField
                        {...field}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                      />
                      {errors[field.name] && (
                        <motion.p
                          className="text-red-500 text-sm mt-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {errors[field.name]}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <motion.button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Validar Formulario
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Limpiar
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Vista previa + Export (el botón vive adentro de FormPreview) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FormPreview values={formData} isValid={isValid} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
