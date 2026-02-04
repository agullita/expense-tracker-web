# 💰 Expense Tracker Web - Gestor Inteligente de Gastos

Aplicación web moderna para gestionar gastos con análisis automático de tickets usando IA (Google Gemini) y conversión automática de monedas.

## ✨ Características

- 📸 **Análisis automático de tickets** con Google Gemini AI
- 💱 **Conversión automática de monedas** (soporta 160+ monedas)
- 🏷️ **Categorización inteligente** (Comidas, Transporte, Alojamiento, Varios)
- 📊 **Exportación a Excel** con formato profesional
- 🎨 **Interfaz moderna y responsive** con Tailwind CSS
- ⚡ **Rendimiento optimizado** con Next.js 14
- 🚀 **Fácil despliegue** en Vercel

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- Una API Key de Google Gemini ([obtener aquí](https://makersuite.google.com/app/apikey))

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone <tu-repo>
cd bot-tickets-web
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.local.example .env.local
```

Edita `.env.local` y agrega tu API key:
```env
GEMINI_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Despliegue en Vercel

### Opción 1: Deploy con el botón

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/tu-repo)

### Opción 2: Deploy manual

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Login en Vercel**
```bash
vercel login
```

3. **Desplegar**
```bash
vercel
```

4. **Configurar variables de entorno en Vercel**
   - Ve a tu proyecto en Vercel Dashboard
   - Settings → Environment Variables
   - Agrega: `GEMINI_API_KEY` con tu API key

5. **Redesplegar con las variables**
```bash
vercel --prod
```

## 📁 Estructura del Proyecto

```
bot-tickets-web/
├── app/
│   ├── api/
│   │   ├── analyze/         # Endpoint para analizar imágenes
│   │   ├── expenses/        # CRUD de gastos
│   │   └── export/          # Exportar a Excel
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── ImageUpload.tsx      # Componente de subida de imágenes
│   └── ExpenseList.tsx      # Lista de gastos
├── lib/
│   ├── gemini.ts            # Cliente de Gemini AI
│   ├── currency.ts          # Conversión de monedas
│   ├── storage.ts           # Almacenamiento de datos
│   └── excel.ts             # Generación de Excel
├── types/
│   └── expense.ts           # Tipos TypeScript
└── public/                  # Archivos estáticos
```

## 🔧 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **IA**: Google Gemini 2.0 Flash
- **Excel**: XLSX
- **API de Monedas**: Open Exchange Rates
- **Deploy**: Vercel

## 🎯 Uso

1. **Subir un ticket**: Arrastra una imagen o haz clic para seleccionar
2. **Análisis automático**: La IA extrae fecha, comercio, total, moneda y categoría
3. **Conversión de moneda**: Si no está en EUR, se convierte automáticamente
4. **Ver gastos**: Lista con todos tus gastos organizados
5. **Exportar**: Descarga un Excel con todos los gastos

## 🌍 Monedas Soportadas

La aplicación soporta **160+ monedas** incluyendo:
- EUR, USD, GBP, JPY, CNY
- SAR (Riyal Saudí), AED, QAR
- Y muchas más...

## 📝 API Endpoints

### POST `/api/analyze`
Analiza una imagen de ticket y guarda el gasto.

**Body:**
```json
{
  "image": "data:image/jpeg;base64,..."
}
```

### GET `/api/expenses`
Obtiene todos los gastos.

### DELETE `/api/expenses`
Elimina todos los gastos.

### DELETE `/api/expenses/[id]`
Elimina un gasto específico.

### GET `/api/export`
Descarga un archivo Excel con todos los gastos.

## 🔐 Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | API Key de Google Gemini | Sí |
| `NEXT_PUBLIC_APP_URL` | URL de la aplicación | No |

## 🐛 Solución de Problemas

### Error: "No se pudo analizar el ticket"
- Asegúrate de que la imagen sea clara y legible
- Verifica que la imagen contenga un ticket o recibo
- Intenta con mejor iluminación

### Error: "Error obteniendo tipo de cambio"
- Verifica tu conexión a internet
- La API puede estar temporalmente no disponible (se usa tasa 1:1 como fallback)

### La app no carga en Vercel
- Verifica que hayas configurado `GEMINI_API_KEY` en las variables de entorno
- Revisa los logs de build en Vercel Dashboard

## 🚀 Mejoras Futuras

- [ ] Autenticación de usuarios (NextAuth.js)
- [ ] Base de datos persistente (PostgreSQL/Vercel KV)
- [ ] Gráficos y estadísticas
- [ ] Filtros y búsqueda avanzada
- [ ] PWA (Progressive Web App)
- [ ] Multi-idioma
- [ ] OCR adicional con Tesseract.js como fallback

## 📄 Licencia

MIT License - siéntete libre de usar este proyecto como quieras.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue.

---

**¡Hecho con ❤️ usando Next.js y Gemini AI!**
