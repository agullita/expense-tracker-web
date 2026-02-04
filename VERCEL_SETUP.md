# 🚀 Configurar Variables de Entorno en Vercel

## ✅ Problema Resuelto

El error `"GEMINI_API_KEY" references Secret "gemini_api_key", which does not exist` ha sido corregido.

---

## 📝 PASOS PARA CONFIGURAR EN VERCEL

### PASO 1: Acceder a tu Dashboard
Ve a: **https://vercel.com/dashboard**

### PASO 2: Seleccionar tu proyecto
Click en: **expense-tracker-web** (o The Fixer)

### PASO 3: Ir a Settings
Click en la pestaña **"Settings"** en la parte superior

### PASO 4: Environment Variables
En el menú lateral izquierdo, click en **"Environment Variables"**

### PASO 5: Agregar la variable
Click en el botón **"Add New"** y completa:

**Key (Nombre de la variable):**
```
GEMINI_API_KEY
```

**Value (Valor):**
```
AIzaSyAXq8Kc-Tr2CN6BoMGRS5y912jE1S9on7A
```

**Environments (Entornos):**
Marca las **3 opciones**:
- ☑️ **Production**
- ☑️ **Preview** 
- ☑️ **Development**

### PASO 6: Guardar
Click en el botón **"Save"**

### PASO 7: Redesplegar
Para que los cambios tomen efecto:

1. Ve a la pestaña **"Deployments"** (arriba)
2. Busca el deployment más reciente
3. Click en los **3 puntos (...)** a la derecha
4. Click en **"Redeploy"**
5. Confirma haciendo click en **"Redeploy"** nuevamente

### PASO 8: Esperar
⏱️ Espera **1-2 minutos** mientras Vercel redespliega tu app

### PASO 9: ¡Listo! 🎉
Tu app estará funcionando en la URL que te dio Vercel, algo como:
```
https://expense-tracker-web-xxx.vercel.app
```

---

## 🔍 Verificar que funciona

1. Abre tu URL de Vercel
2. Deberías ver: **"🔧 The Fixer"** en el header
3. Intenta subir una foto de un ticket
4. Si se analiza correctamente, ¡todo está funcionando! ✅

---

## 🆘 Solución de Problemas

### Error: "GEMINI_API_KEY is not defined"
- Verifica que agregaste la variable correctamente
- Asegúrate de haber marcado "Production"
- Redespliega el proyecto

### Error: "Failed to analyze ticket"
- Verifica que la API key sea correcta
- Prueba con otra imagen más clara

### La app no carga
- Revisa los logs en: Deployments → [tu deployment] → View Function Logs
- Verifica que el build fue exitoso

---

## 📊 Vista Previa de la Configuración

```
┌─────────────────────────────────────────┐
│ Environment Variables                   │
├─────────────────────────────────────────┤
│ Name: GEMINI_API_KEY                   │
│ Value: AIzaSy... (hidden)             │
│ Environments:                           │
│   ☑ Production                         │
│   ☑ Preview                            │
│   ☑ Development                        │
└─────────────────────────────────────────┘
```

---

## 🔐 Seguridad

✅ **Buenas prácticas:**
- La API key está oculta en Vercel
- No está en el código fuente (GitHub)
- Solo los colaboradores del proyecto pueden verla
- Está protegida por .gitignore localmente

---

## 🎯 Siguiente Paso

Una vez desplegado, tu app estará disponible en:
- 🌐 **URL de producción**: La URL principal que puedes compartir
- 🔍 **URL de preview**: Para cada commit nuevo en GitHub

**¡Comparte tu URL y empieza a usar The Fixer!** 🚀

---

## 📚 Más Información

- [Documentación de Variables de Entorno en Vercel](https://vercel.com/docs/concepts/projects/environment-variables)
- [Gestión de Secrets en Vercel](https://vercel.com/docs/cli#commands/secrets)

---

**¿Problemas?** Revisa los logs en Vercel Dashboard o consulta `DEPLOYMENT.md`
