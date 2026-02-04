import * as XLSX from 'xlsx';
import { Expense } from '@/types/expense';

export function generateExcel(expenses: Expense[]): Buffer {
  // Preparar datos para Excel
  const data = expenses.map(expense => ({
    'Fecha Registro': expense.dateRegistered,
    'Fecha Ticket': expense.dateTicket,
    'Comercio': expense.merchant,
    'Total Original': expense.totalOriginal,
    'Moneda': expense.currency,
    'Total EUR': expense.totalEUR,
    'Categoría': expense.category,
  }));

  // Crear workbook
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Gastos');

  // Ajustar ancho de columnas
  const maxWidth = 20;
  const wscols = [
    { wch: 20 }, // Fecha Registro
    { wch: 15 }, // Fecha Ticket
    { wch: 30 }, // Comercio
    { wch: 15 }, // Total Original
    { wch: 10 }, // Moneda
    { wch: 15 }, // Total EUR
    { wch: 15 }, // Categoría
  ];
  ws['!cols'] = wscols;

  // Generar buffer
  const excelBuffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
  return excelBuffer;
}
