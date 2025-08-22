import { FileSpreadsheet } from "lucide-react";
import { exportToExcel, exportToCSV } from "../utils/exportExcel.js";

export default function ExportButton({ values = {}, disabled }) {
  const onExport = () => {
    if (!values || Object.keys(values).length === 0) {
      alert("No hay datos para exportar");
      return;
    }
    try {
      exportToExcel(values);
    } catch (e) {
      console.error("Fallo XLSX, uso CSV:", e);
      exportToCSV(values);
    }
  };

  return (
    <button
      type="button"
      onClick={onExport}
      disabled={disabled}
      className="btn-export inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
      aria-label="Exportar a Excel"
    >
      <FileSpreadsheet size={18} />
      <span>Exportar a Excel</span>
    </button>
  );
}
