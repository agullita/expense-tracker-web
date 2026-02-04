import { Expense } from '@/types/expense';
import fs from 'fs';
import path from 'path';

// Para desarrollo local, usamos sistema de archivos
// En producción en Vercel, deberías usar Vercel KV o PostgreSQL

const DATA_DIR = path.join(process.cwd(), 'data');
const EXPENSES_FILE = path.join(DATA_DIR, 'expenses.json');

// Asegurar que existe el directorio
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export async function getAllExpenses(): Promise<Expense[]> {
  try {
    if (!fs.existsSync(EXPENSES_FILE)) {
      return [];
    }
    const data = fs.readFileSync(EXPENSES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading expenses:', error);
    return [];
  }
}

export async function saveExpense(expense: Expense): Promise<void> {
  try {
    const expenses = await getAllExpenses();
    expenses.push(expense);
    fs.writeFileSync(EXPENSES_FILE, JSON.stringify(expenses, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving expense:', error);
    throw new Error('No se pudo guardar el gasto');
  }
}

export async function deleteExpense(id: string): Promise<void> {
  try {
    const expenses = await getAllExpenses();
    const filtered = expenses.filter(e => e.id !== id);
    fs.writeFileSync(EXPENSES_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw new Error('No se pudo eliminar el gasto');
  }
}

export async function clearAllExpenses(): Promise<void> {
  try {
    fs.writeFileSync(EXPENSES_FILE, JSON.stringify([], null, 2), 'utf-8');
  } catch (error) {
    console.error('Error clearing expenses:', error);
    throw new Error('No se pudo limpiar los gastos');
  }
}
