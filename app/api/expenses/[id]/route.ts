import { NextRequest, NextResponse } from 'next/server';
import { deleteExpense } from '@/lib/storage';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteExpense(params.id);
    return NextResponse.json({ success: true, message: 'Gasto eliminado' });
  } catch (error: any) {
    console.error('Error en /api/expenses/[id] DELETE:', error);
    return NextResponse.json(
      { error: 'Error eliminando gasto' },
      { status: 500 }
    );
  }
}
