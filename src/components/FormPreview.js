import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  DollarSign,
  Star,
} from "lucide-react";
import ExportButton from "./ExportButton";

export default function FormPreview({ values, isValid }) {
  const fieldIcons = {
    nombre: User,
    email: Mail,
    telefono: Phone,
    edad: Calendar,
    ciudad: MapPin,
    profesion: Briefcase,
    salario: DollarSign,
    experiencia: Star,
    categoria: Briefcase,
    comentarios: Eye,
  };

  const formatValue = (key, value) => {
    if (key === "salario") return `$${Number(value).toLocaleString()}`;
    if (key === "experiencia") return `${value} años`;
    return value;
  };

  const labels = {
    nombre: "Nombre Completo",
    email: "Correo Electrónico",
    telefono: "Teléfono",
    edad: "Edad",
    ciudad: "Ciudad",
    profesion: "Profesión",
    salario: "Salario",
    experiencia: "Años de Experiencia",
    categoria: "Categoría",
    comentarios: "Comentarios",
  };

  const hasData = Object.values(values || {}).some((v) => v !== "");

  if (!hasData) {
    return (
      <motion.div
        className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Vista Previa
        </h3>
        <p className="text-gray-500">
          Los datos aparecerán aquí mientras completas el formulario
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <Eye className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">
          Vista Previa de Datos
        </h3>
      </div>

      <div className="space-y-4">
        {Object.entries(values).map(([key, value], index) => {
          if (!value) return null;
          const Icon = fieldIcons[key] || User;
          return (
            <motion.div
              key={key}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-600">
                  {labels[key] || key}
                </p>
                <p className="text-gray-900 font-semibold break-words">
                  {formatValue(key, value)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {isValid && (
        <motion.div
          className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 mt-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <div className="w-6 h-6 bg-green-500 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            ¡Formulario Válido!
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Todos los datos han sido validados correctamente
          </p>

          <ExportButton values={values} disabled={!isValid} />
          {/* TEST opcional (borrar luego):
          <button type="button" onClick={() => exportToExcel({ nombre:"Prueba", apellido:"Demo" })}
            className="mt-3 px-4 py-2 rounded-lg bg-gray-200">
            Test Excel
          </button> */}
        </motion.div>
      )}
    </motion.div>
  );
}
