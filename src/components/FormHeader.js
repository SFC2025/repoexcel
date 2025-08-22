import React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Download } from "lucide-react";

const FormHeader = ({
  title = "Formulario de Datos",
  subtitle = "Complete la información requerida",
}) => {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileSpreadsheet className="w-8 h-8 text-white" />
      </motion.div>

      <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
        {title}
      </h1>

      <p className="text-gray-600 font-medium">{subtitle}</p>
    </motion.div>
  );
};

export default FormHeader;
