'use client';

import { useState, useEffect } from 'react';
import ImageUpload from '@/components/ImageUpload';
import ExpenseList from '@/components/ExpenseList';
import { Expense } from '@/types/expense';
import axios from 'axios';

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Cargar gastos al inicio
  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data.expenses);
    } catch (error) {
      console.error('Error cargando gastos:', error);
      showMessage('error', 'Error cargando los gastos');
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = async (base64Image: string) => {
    setAnalyzing(true);
    setMessage(null);

    try {
      const response = await axios.post('/api/analyze', { image: base64Image });
      
      if (response.data.success) {
        const newExpense = response.data.expense;
        setExpenses([newExpense, ...expenses]);
        
        const exchangeInfo = response.data.expense.currency !== 'EUR'
          ? ` (${response.data.expense.totalEUR}€)`
          : '';
        
        showMessage(
          'success',
          `✅ Gasto guardado: ${newExpense.merchant} - ${newExpense.totalOriginal} ${newExpense.currency}${exchangeInfo}`
        );
      }
    } catch (error: any) {
      console.error('Error analizando imagen:', error);
      const errorMsg = error.response?.data?.error || 'Error procesando la imagen';
      showMessage('error', `❌ ${errorMsg}`);
    } finally {
      setAnalyzing(false);
    }
  };

  const handleDeleteExpense = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este gasto?')) return;

    try {
      await axios.delete(`/api/expenses/${id}`);
      setExpenses(expenses.filter(e => e.id !== id));
      showMessage('success', 'Gasto eliminado correctamente');
    } catch (error) {
      console.error('Error eliminando gasto:', error);
      showMessage('error', 'Error eliminando el gasto');
    }
  };

  const handleClearAll = async () => {
    if (!confirm('¿Estás seguro de eliminar TODOS los gastos? Esta acción no se puede deshacer.')) return;

    try {
      await axios.delete('/api/expenses');
      setExpenses([]);
      showMessage('success', 'Todos los gastos han sido eliminados');
    } catch (error) {
      console.error('Error limpiando gastos:', error);
      showMessage('error', 'Error limpiando los gastos');
    }
  };

  const handleExport = async () => {
    if (expenses.length === 0) {
      showMessage('error', 'No hay gastos para exportar');
      return;
    }

    try {
      const response = await axios.get('/api/export', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Gastos_${new Date().toISOString().split('T')[0]}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      showMessage('success', 'Excel descargado correctamente');
    } catch (error) {
      console.error('Error exportando:', error);
      showMessage('error', 'Error generando el Excel');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🔧 The Fixer</h1>
              <p className="text-gray-600 mt-1">Gestor inteligente de gastos con IA</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                disabled={expenses.length === 0}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Exportar Excel
              </button>
              <button
                onClick={handleClearAll}
                disabled={expenses.length === 0}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Limpiar Todo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mensaje de notificación */}
      {message && (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4`}>
          <div
            className={`p-4 rounded-lg shadow-md ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {message.text}
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel izquierdo - Subir imagen */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">📸 Subir Ticket</h2>
              <p className="text-gray-600 mb-6">
                Sube una foto de tu ticket y la IA extraerá automáticamente los datos
              </p>
              <ImageUpload onImageSelect={handleImageSelect} disabled={analyzing} />
              
              {analyzing && (
                <div className="mt-6 flex items-center justify-center gap-3 text-primary-600">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600"></div>
                  <span className="font-medium">Analizando ticket con IA...</span>
                </div>
              )}
            </div>

            {/* Características */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">✨ Características</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Análisis automático con IA (Gemini)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Conversión automática de monedas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Categorización inteligente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Exportación a Excel</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Panel derecho - Lista de gastos */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">📋 Mis Gastos</h2>
            <ExpenseList
              expenses={expenses}
              onDelete={handleDeleteExpense}
              loading={loading}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            The Fixer - Hecho con ❤️ usando Next.js + Gemini AI
          </p>
        </div>
      </footer>
    </main>
  );
}
