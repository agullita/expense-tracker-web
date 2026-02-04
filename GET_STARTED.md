# 🎯 COMIENZA AQUÍ - Expense Tracker Web

## 👋 ¡Bienvenido!

Has convertido exitosamente tu bot de Telegram a una aplicación web moderna.

---

## 🚀 Opción 1: Probar Localmente (5 minutos)

### Windows:
1. Doble click en `START.bat`
2. Espera a que se instalen las dependencias
3. Abre tu navegador en `http://localhost:3000`
4. ¡Sube tu primer ticket!

### Mac/Linux:
```bash
chmod +x START.sh
./START.sh
```

### Manual:
```bash
npm install
npm run dev
```

---

## 🌐 Opción 2: Desplegar en Internet (15 minutos)

### Paso 1: Subir a GitHub
📖 Lee: `GITHUB_SETUP.md`

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### Paso 2: Desplegar en Vercel
📖 Lee: `DEPLOYMENT.md`

1. Ve a [vercel.com](https://vercel.com)
2. Import from GitHub
3. Agrega variable: `GEMINI_API_KEY=tu_api_key`
4. Deploy 🚀

---

## 📚 Documentación

| Archivo | Descripción | Tiempo |
|---------|-------------|--------|
| `QUICKSTART.md` | Inicio rápido | 5 min |
| `GITHUB_SETUP.md` | Subir a GitHub | 5 min |
| `DEPLOYMENT.md` | Desplegar en Vercel | 10 min |
| `README.md` | Documentación completa | - |
| `MIGRATION.md` | Migrar desde bot | - |
| `SUMMARY.md` | Resumen del proyecto | - |

---

## ✨ Características Principales

```
📸 Subir Ticket
   └─> IA analiza la imagen
       └─> Extrae: fecha, comercio, total, moneda
           └─> Convierte a EUR automáticamente
               └─> Categoriza (Comidas/Transporte/etc)
                   └─> Guarda en la lista
```

### Funciones:
- ✅ **Analizar tickets** con Gemini AI
- ✅ **Convertir monedas** (160+ monedas)
- ✅ **Categorizar gastos** automáticamente
- ✅ **Exportar a Excel** con formato profesional
- ✅ **Ver resumen** de totales
- ✅ **Eliminar gastos** individuales o todos

---

## 🎨 Interfaz

```
┌─────────────────────────────────────────────┐
│  💰 Expense Tracker          [Export] [Clear] │
├─────────────────────────────────────────────┤
│                                             │
│  📸 Subir Ticket     │  📋 Mis Gastos      │
│  ┌─────────────┐     │  ┌──────────────┐   │
│  │   Drag &    │     │  │ Total: 150€  │   │
│  │   Drop      │     │  ├──────────────┤   │
│  │   Image     │     │  │ 🍽️ Comidas   │   │
│  └─────────────┘     │  │ 🚗 Transporte│   │
│                      │  │ 🏨 Alojamiento│   │
│  ✨ Características  │  └──────────────┘   │
│                      │                     │
└─────────────────────────────────────────────┘
```

---

## 🔧 Tecnologías

- **Frontend**: Next.js 14 + React + TypeScript
- **Estilos**: Tailwind CSS
- **IA**: Google Gemini 2.0 Flash
- **Monedas**: Open Exchange Rates API
- **Excel**: XLSX
- **Deploy**: Vercel (gratis)

---

## 📝 Primeros Pasos Recomendados

### 1️⃣ Probar localmente
```bash
npm install
npm run dev
```

### 2️⃣ Subir una imagen
- Arrastra una foto de ticket
- Espera el análisis
- Verifica los datos extraídos

### 3️⃣ Exportar Excel
- Sube varios tickets
- Click en "Exportar Excel"
- Descarga el archivo

### 4️⃣ Subir a GitHub
- Sigue `GITHUB_SETUP.md`
- Crea tu repositorio
- Sube el código

### 5️⃣ Desplegar en Vercel
- Sigue `DEPLOYMENT.md`
- Conecta GitHub con Vercel
- ¡Tu app está online! 🌍

---

## 💡 Tips

### Para mejores resultados:
- 📸 **Fotos claras** con buena iluminación
- 🔍 **Texto legible** en el ticket
- 📱 **Evita reflejos** o sombras
- ✂️ **Recorta** solo el ticket (opcional)

### Monedas soportadas:
- 💶 EUR, 💵 USD, 💷 GBP, 💴 JPY
- 🇸🇦 SAR, 🇦🇪 AED, 🇶🇦 QAR
- ¡Y 150+ más!

### Categorías:
- 🍽️ **Comidas** - Restaurantes, supermercados
- 🚗 **Transporte** - Taxi, gasolina, parkings
- 🏨 **Alojamiento** - Hoteles, Airbnb
- 📦 **Varios** - Compras, entretenimiento

---

## 🆘 Problemas Comunes

### "No analiza la imagen"
✅ Verifica que `GEMINI_API_KEY` esté en `.env.local`

### "Error instalando dependencias"
✅ Asegúrate de tener Node.js 18+ instalado

### "Puerto 3000 ocupado"
✅ Usa otro puerto: `npm run dev -- -p 3001`

### "No exporta Excel"
✅ Sube al menos un ticket primero

---

## 🎯 Checklist Rápido

- [ ] ✅ `.env.local` existe con tu API key
- [ ] ✅ Node.js 18+ instalado
- [ ] ✅ Ejecutar `npm install`
- [ ] ✅ Ejecutar `npm run dev`
- [ ] ✅ Abrir `http://localhost:3000`
- [ ] ✅ Subir foto de ticket
- [ ] ✅ Verificar que funciona
- [ ] ✅ Exportar a Excel
- [ ] ✅ Subir a GitHub (opcional)
- [ ] ✅ Desplegar en Vercel (opcional)

---

## 📞 Necesitas Ayuda?

1. 📖 **Lee la documentación** en los archivos `.md`
2. 🔍 **Revisa** `SUMMARY.md` para entender el proyecto
3. 💬 **Abre un issue** en GitHub si tienes problemas
4. 📧 **Contacta** al desarrollador

---

## 🎉 ¡Éxito!

Cuando veas esto en tu navegador, ¡lo has logrado! 🎊

```
┌─────────────────────────────────────┐
│  💰 Expense Tracker                 │
│  Gestor inteligente de gastos con IA │
├─────────────────────────────────────┤
│                                     │
│  📸 ¡Arrastra una imagen aquí!      │
│                                     │
└─────────────────────────────────────┘
```

---

## 🚀 Siguiente Nivel

Una vez que funcione localmente:

1. 🐙 **GitHub** - Comparte tu código
2. ☁️ **Vercel** - App online 24/7 gratis
3. 📱 **Comparte** la URL con amigos
4. 🎨 **Personaliza** colores y estilos
5. ⭐ **Contribuye** con mejoras

---

**¡Comienza ahora!** 👇

```bash
cd GeminiCli/bot-tickets-web
npm install
npm run dev
```

**¡Buena suerte! 🍀**
