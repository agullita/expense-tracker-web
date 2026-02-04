import { NextRequest, NextResponse } from 'next/server';
import { getAllExpenses, clearAllExpenses } from '@/lib/storage';

export async function GET() {
  try {
    const expenses = await getAllExpenses();
    return NextResponse.json({ expenses });
  } catch (error: any) {
    console.error('Error en /api/expenses GET:', error);
    return NextResponse.json(
      { error: 'Error obteniendo gastos' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await clearAllExpenses();
    return NextResponse.json({ success: true, message: 'Todos los gastos han sido eliminados' });
  } catch (error: any) {
    console.error('Error en /api/expenses DELETE:', error);
    return NextResponse.json(
      { error: 'Error eliminando gastos' },
      { status: 500 }
    );
  }
}
