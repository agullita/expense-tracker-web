# 🔄 Migración desde Bot de Telegram

Esta guía te ayuda a migrar desde la versión de bot de Telegram a la versión web.

## Comparación de Funcionalidades

| Característica | Bot Telegram | Versión Web |
|----------------|--------------|-------------|
| Subir tickets | ✅ Foto por Telegram | ✅ Drag & Drop / Click |
| Análisis con IA | ✅ Gemini 2.0 | ✅ Gemini 2.0 |
| Conversión moneda | ✅ Automática | ✅ Automática |
| Exportar Excel | ✅ Comando /exportar | ✅ Botón Export |
| Interfaz | 📱 Chat | 💻 Web moderna |
| Acceso | 🔒 Solo Telegram | 🌍 Cualquier navegador |
| Almacenamiento | 📁 CSV | 📁 JSON (migrable a DB) |

## Migrar Datos Existentes

Si tienes datos en el bot de Telegram (`gastos.csv`), puedes migrarlos:

### Paso 1: Exportar datos del bot

El bot guarda los datos en `gastos.csv`. Localiza este archivo en tu servidor.

### Paso 2: Convertir CSV a JSON

Crea un script `migrate.js`:

```javascript
const fs = require('fs');
const csv = require('csv-parser');

const expenses = [];

fs.createReadStream('gastos.csv')
  .pipe(csv())
  .on('data', (row) => {
    expenses.push({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      dateRegistered: row.Fecha_Registro,
      dateTicket: row.Fecha_Ticket,
      merchant: row.Comercio,
      totalOriginal: parseFloat(row.Total_Original),
      currency: row.Moneda,
      totalEUR: parseFloat(row.Total_EUR),
      category: row.Categoria
    });
  })
  .on('end', () => {
    fs.writeFileSync('data/expenses.json', JSON.stringify(expenses, null, 2));
    console.log('✅ Migración completada');
  });
```

Ejecuta:
```bash
npm install csv-parser
node migrate.js
```

## Mantener Ambas Versiones

Puedes usar tanto el bot como la web simultáneamente:

### Opción 1: Almacenamiento compartido
- Configura ambos para usar la misma base de datos (PostgreSQL/Supabase)
- Los datos se sincronizarán automáticamente

### Opción 2: Uso separado
- Bot para uso móvil rápido
- Web para análisis detallado y gestión

## Ventajas de la Versión Web

### 🎨 Interfaz Visual
- Ver todos los gastos de un vistazo
- Gráficos y estadísticas (próximamente)
- Mejor experiencia de usuario

### 🚀 Sin dependencias de Telegram
- No necesitas servidor 24/7
- Deploy gratis en Vercel
- Acceso desde cualquier dispositivo

### 📊 Funcionalidades Avanzadas
- Filtros y búsqueda
- Edición de gastos
- Exportación personalizada

### 💾 Almacenamiento Flexible
- Fácil integración con bases de datos
- Backup automático
- Escalable

## Diferencias Técnicas

### Bot de Telegram
```python
# Python + python-telegram-bot
# Servidor permanente (Fly.io)
# CSV para almacenamiento
```

### Versión Web
```typescript
// TypeScript + Next.js
// Serverless (Vercel)
// JSON/DB para almacenamiento
```

## ¿Cuál usar?

### Usa el Bot si:
- ✅ Prefieres Telegram
- ✅ Necesitas acceso ultra-rápido móvil
- ✅ Quieres notificaciones push

### Usa la Web si:
- ✅ Quieres mejor visualización
- ✅ Necesitas análisis detallado
- ✅ Prefieres interfaz gráfica
- ✅ Quieres compartir con equipo

### Usa ambos si:
- ✅ Quieres lo mejor de ambos mundos
- ✅ Conectas a base de datos compartida

## Próximos pasos

1. ✅ **Instalar la versión web** (ver `QUICKSTART.md`)
2. 📦 **Migrar datos** (opcional, si tienes datos antiguos)
3. 🚀 **Desplegar en Vercel** (ver `DEPLOYMENT.md`)
4. 🎉 **Disfrutar** de la nueva interfaz

## Preguntas Frecuentes

**¿Puedo seguir usando el bot?**
Sí, son completamente independientes.

**¿Los datos se sincronizan?**
No por defecto, pero puedes configurar una DB compartida.

**¿La versión web es gratis?**
Sí, completamente gratis en Vercel (plan gratuito).

**¿Necesito código para usar la web?**
No, solo configura la API key y despliega.

---

**¿Más preguntas? Abre un issue en GitHub** 💬
