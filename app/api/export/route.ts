import { NextResponse } from 'next/server';
import { getAllExpenses } from '@/lib/storage';
import { generateExcel } from '@/lib/excel';

export async function GET() {
  try {
    const expenses = await getAllExpenses();

    if (expenses.length === 0) {
      return NextResponse.json(
        { error: 'No hay gastos para exportar' },
        { status: 404 }
      );
    }

    const excelBuffer = generateExcel(expenses);
    const fileName = `Gastos_${new Date().toISOString().split('T')[0]}.xlsx`;

    return new NextResponse(excelBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error: any) {
    console.error('Error en /api/export:', error);
    return NextResponse.json(
      { error: 'Error generando Excel' },
      { status: 500 }
    );
  }
}
