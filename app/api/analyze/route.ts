import { NextRequest, NextResponse } from 'next/server';
import { analyzeTicketImage } from '@/lib/gemini';
import { getExchangeRate } from '@/lib/currency';
import { saveExpense } from '@/lib/storage';
import { Expense } from '@/types/expense';

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: 'No se proporcionó ninguna imagen' },
        { status: 400 }
      );
    }

    // 1. Analizar la imagen con Gemini
    const analysis = await analyzeTicketImage(image);

    // 2. Obtener tasa de cambio
    const exchangeRate = await getExchangeRate(analysis.currency, 'EUR');
    const totalEUR = parseFloat((analysis.total * exchangeRate).toFixed(2));

    // 3. Crear el registro del gasto
    const expense: Expense = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      dateRegistered: new Date().toISOString(),
      dateTicket: analysis.date,
      merchant: analysis.merchant,
      totalOriginal: analysis.total,
      currency: analysis.currency,
      totalEUR: totalEUR,
      category: analysis.category,
    };

    // 4. Guardar el gasto
    await saveExpense(expense);

    return NextResponse.json({
      success: true,
      expense,
      exchangeRate,
    });
  } catch (error: any) {
    console.error('Error en /api/analyze:', error);
    return NextResponse.json(
      { error: error.message || 'Error procesando la imagen' },
      { status: 500 }
    );
  }
}
