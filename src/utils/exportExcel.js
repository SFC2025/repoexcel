import * as XLSX from "xlsx";

export function exportToExcel(values) {
  const rows = [
    ["Nombre", values.nombre || ""],
    ["Apellido", values.apellido || ""],
    ["Edad", values.edad || ""],
    ["Ciudad", values.ciudad || ""],
    ["Profesión", values.profesion || ""],
    ["Salario", values.salario || ""],
    ["Años de Experiencia", values.experiencia || values.anios || ""],
    ["Categoría", values.categoria || ""],
    ["Comentarios", values.comentarios || ""],
    ["Fecha", new Date().toLocaleString()],
  ];

  const ws = XLSX.utils.aoa_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Formulario");
  XLSX.writeFile(wb, `formulario_${Date.now()}.xlsx`, { compression: true });
}

export function exportToCSV(values) {
  const headers = [
    "Nombre","Apellido","Edad","Ciudad","Profesión","Salario",
    "Años de Experiencia","Categoría","Comentarios","Fecha"
  ];
  const data = [
    values.nombre || "",
    values.apellido || "",
    values.edad || "",
    values.ciudad || "",
    values.profesion || "",
    values.salario || "",
    values.experiencia || values.anios || "",
    values.categoria || "",
    values.comentarios || "",
    new Date().toLocaleString(),
  ];
  const csv = [headers.join(","), data.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",")].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `formulario_${Date.now()}.csv`; a.click();
  URL.revokeObjectURL(url);
}
