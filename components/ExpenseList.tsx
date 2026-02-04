'use client';

import { Expense } from '@/types/expense';
import { formatCurrency } from '@/lib/currency';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete?: (id: string) => void;
  loading?: boolean;
}

const categoryIcons: Record<string, string> = {
  Comidas: '🍽️',
  Transporte: '🚗',
  Alojamiento: '🏨',
  Varios: '📦',
};

const categoryColors: Record<string, string> = {
  Comidas: 'bg-green-100 text-green-800',
  Transporte: 'bg-blue-100 text-blue-800',
  Alojamiento: 'bg-purple-100 text-purple-800',
  Varios: 'bg-gray-100 text-gray-800',
};

export default function ExpenseList({ expenses, onDelete, loading = false }: ExpenseListProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-24 w-24 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No hay gastos registrados</h3>
        <p className="mt-2 text-sm text-gray-500">Comienza subiendo la foto de un ticket</p>
      </div>
    );
  }

  const totalEUR = expenses.reduce((sum, exp) => sum + exp.totalEUR, 0);

  return (
    <div className="space-y-4">
      {/* Resumen total */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white shadow-lg">
        <h3 className="text-sm font-medium opacity-90">Total gastado</h3>
        <p className="text-3xl font-bold mt-1">{formatCurrency(totalEUR, 'EUR')}</p>
        <p className="text-sm opacity-75 mt-2">{expenses.length} tickets registrados</p>
      </div>

      {/* Lista de gastos */}
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{categoryIcons[expense.category]}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[expense.category]}`}>
                    {expense.category}
                  </span>
                </div>
                
                <h4 className="font-semibold text-lg text-gray-900">{expense.merchant}</h4>
                
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p>
                    📅 {format(new Date(expense.dateTicket), 'PPP', { locale: es })}
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="font-medium text-gray-900">
                      {formatCurrency(expense.totalOriginal, expense.currency)}
                    </p>
                    {expense.currency !== 'EUR' && (
                      <>
                        <span className="text-gray-400">→</span>
                        <p className="text-primary-600 font-semibold">
                          {formatCurrency(expense.totalEUR, 'EUR')}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {onDelete && (
                <button
                  onClick={() => onDelete(expense.id)}
                  className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  title="Eliminar gasto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
