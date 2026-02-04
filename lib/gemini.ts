import { GoogleGenerativeAI } from '@google/generative-ai';
import { TicketAnalysis } from '@/types/expense';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function analyzeTicketImage(imageData: string): Promise<TicketAnalysis> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

  const prompt = `
Analiza esta imagen de un ticket/recibo. Extrae la siguiente información en formato JSON estricto:
{
    "date": "YYYY-MM-DD" (fecha de la compra, usa hoy si no es visible),
    "merchant": "Nombre del comercio",
    "total": 0.00 (número decimal),
    "currency": "CODIGO_ISO" (ej: EUR, USD, GBP, JPY, SAR. Si es símbolo $ y no se sabe, asume USD),
    "category": "Clasifica el gasto EXACTAMENTE en una de estas opciones: 'Comidas', 'Transporte', 'Alojamiento', 'Varios'"
}
Responde SOLO con el JSON válido, sin formato markdown.
`;

  try {
    // Convertir base64 a formato que Gemini entiende
    const imagePart = {
      inlineData: {
        data: imageData.split(',')[1], // Remover el prefijo data:image/...;base64,
        mimeType: imageData.split(';')[0].split(':')[1],
      },
    };

    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    const text = response.text();
    
    // Limpiar la respuesta
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const parsed = JSON.parse(cleanText);
    
    // Validar que tenga los campos necesarios
    if (!parsed.date || !parsed.merchant || !parsed.total || !parsed.currency || !parsed.category) {
      throw new Error('Respuesta incompleta del modelo');
    }

    return parsed as TicketAnalysis;
  } catch (error) {
    console.error('Error analyzing ticket:', error);
    throw new Error('No se pudo analizar el ticket. Asegúrate de que la imagen sea clara.');
  }
}
