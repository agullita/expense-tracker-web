export interface Expense {
  id: string;
  dateRegistered: string;
  dateTicket: string;
  merchant: string;
  totalOriginal: number;
  currency: string;
  totalEUR: number;
  category: 'Comidas' | 'Transporte' | 'Alojamiento' | 'Varios';
}

export interface TicketAnalysis {
  date: string;
  merchant: string;
  total: number;
  currency: string;
  category: 'Comidas' | 'Transporte' | 'Alojamiento' | 'Varios';
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  timestamp: number;
}
