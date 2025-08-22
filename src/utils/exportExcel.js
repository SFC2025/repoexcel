import * as XLSX from "xlsx";
import { sections } from "../data/fenalceSchema";

export function exportToExcel(values, filename = "caracterizacion_fenalce") {
  const rows = [];
  for (const sec of sections) {
    rows.push([sec.title]);                // título de sección
    for (const f of sec.fields) {
      const val = values[f.name];
      const pretty = Array.isArray(val) ? val.join("; ") : (val ?? "");
      rows.push([f.label ?? f.name, pretty]);
    }
    rows.push([""]); // línea en blanco entre secciones
  }

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Formulario");
  XLSX.writeFile(wb, `${filename}_${Date.now()}.xlsx`, { compression: true });
}

export function exportToCSV(values) {
  const headers = [];
  const data = [];
  for (const sec of sections) {
    for (const f of sec.fields) {
      headers.push(`${sec.title} - ${f.label ?? f.name}`);
      const val = values[f.name];
      data.push(Array.isArray(val) ? val.join("; ") : (val ?? ""));
    }
  }
  const csv = [headers.join(","), data.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",")].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = `caracterizacion_${Date.now()}.csv`; a.click();
  URL.revokeObjectURL(url);
}
