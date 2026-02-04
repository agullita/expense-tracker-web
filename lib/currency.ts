import { ExchangeRate } from '@/types/expense';

// Cache para las tasas de cambio (válido por 1 hora)
const rateCache = new Map<string, ExchangeRate>();
const CACHE_DURATION = 3600000; // 1 hora en milisegundos

export async function getExchangeRate(
  fromCurrency: string,
  toCurrency: string = 'EUR'
): Promise<number> {
  if (fromCurrency === toCurrency) {
    return 1.0;
  }

  const cacheKey = `${fromCurrency}-${toCurrency}`;
  const cached = rateCache.get(cacheKey);

  // Verificar si hay cache válido
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.rate;
  }

  try {
    // Usamos open.er-api.com que soporta muchas monedas globales
    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === 'success' && data.rates[toCurrency]) {
      const rate = data.rates[toCurrency];
      
      // Guardar en cache
      rateCache.set(cacheKey, {
        from: fromCurrency,
        to: toCurrency,
        rate,
        timestamp: Date.now(),
      });

      return rate;
    }

    console.warn(`No se encontró tasa de cambio para ${fromCurrency} -> ${toCurrency}`);
    return 1.0; // Fallback
  } catch (error) {
    console.error('Error obteniendo tipo de cambio:', error);
    return 1.0; // Fallback
  }
}

export function formatCurrency(amount: number, currency: string): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
