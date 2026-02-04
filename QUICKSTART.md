# 🚀 Quick Start - Inicio Rápido

## En 5 minutos tendrás tu app funcionando

### 1️⃣ Obtén tu API Key de Gemini (Gratis)

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Click en **"Create API Key"**
4. Copia la API key generada

### 2️⃣ Instala dependencias

```bash
npm install
```

### 3️⃣ Configura tu API Key

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
GEMINI_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4️⃣ Ejecuta la aplicación

```bash
npm run dev
```

### 5️⃣ Abre en el navegador

Visita: [http://localhost:3000](http://localhost:3000)

## ✅ Prueba la aplicación

1. **Arrastra una foto** de un ticket de compra a la zona de subida
2. **Espera unos segundos** mientras la IA analiza la imagen
3. **Verifica los datos** extraídos automáticamente
4. **Exporta a Excel** cuando tengas varios tickets

## 📱 Ejemplos de tickets que funcionan bien

- ✅ Recibos de restaurantes
- ✅ Tickets de supermercado
- ✅ Facturas de hotel
- ✅ Recibos de taxi/Uber
- ✅ Compras online (screenshots)

## ⚠️ Solución rápida de problemas

### No analiza la imagen
- **Solución**: Verifica que pusiste correctamente el `GEMINI_API_KEY` en `.env.local`
- Reinicia el servidor (Ctrl+C y luego `npm run dev`)

### Error "Module not found"
- **Solución**: `npm install`

### Puerto 3000 ocupado
- **Solución**: Usa otro puerto: `npm run dev -- -p 3001`

## 🚀 Siguiente paso: Desplegar en Vercel

Lee `DEPLOYMENT.md` para instrucciones detalladas de cómo subir tu app a internet **GRATIS**.

---

**¿Problemas? Abre un issue en GitHub** 🐛
