# 🐙 Guía para subir a GitHub

## Paso 1: Preparar el proyecto

El proyecto ya está listo con `.gitignore` configurado correctamente.

## Paso 2: Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) y haz login
2. Click en el **+** (arriba derecha) → **New repository**
3. Configura el repositorio:
   - **Repository name**: `expense-tracker-web` (o el que prefieras)
   - **Description**: `📱 Gestor inteligente de gastos con IA - Analiza tickets automáticamente`
   - **Public** o **Private** (tu elección)
   - **NO** marques "Initialize with README" (ya lo tenemos)
4. Click en **Create repository**

## Paso 3: Subir el código

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Navegar al proyecto
cd GeminiCli/bot-tickets-web

# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "🎉 Initial commit: Expense Tracker Web with Gemini AI"

# Conectar con tu repositorio de GitHub (reemplaza TU-USUARIO y TU-REPO)
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git

# Subir el código
git branch -M main
git push -u origin main
```

### Ejemplo real:
Si tu usuario es `johndoe` y tu repo es `expense-tracker-web`:

```bash
git remote add origin https://github.com/johndoe/expense-tracker-web.git
git branch -M main
git push -u origin main
```

## Paso 4: Verificar

1. Refresca tu página de GitHub
2. Deberías ver todos los archivos del proyecto
3. El README.md se mostrará automáticamente

## ⚠️ Importante: Seguridad

### ✅ Archivos que SE suben a GitHub:
- `package.json`
- `tsconfig.json`
- Todo el código fuente
- `.env.example` (plantilla sin credenciales)
- Documentación

### 🚫 Archivos que NO se suben (protegidos por .gitignore):
- `.env.local` (tu API key está segura ✅)
- `node_modules/`
- `.next/`
- `data/` (datos locales)

## Paso 5: Configurar Secrets en GitHub (Opcional)

Si quieres usar GitHub Actions:

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Click en **New repository secret**
4. Agrega:
   - Name: `GEMINI_API_KEY`
   - Secret: Tu API key de Gemini

## Comandos Git útiles

### Después de hacer cambios:
```bash
git add .
git commit -m "✨ Descripción de tus cambios"
git push
```

### Ver estado:
```bash
git status
```

### Ver historial:
```bash
git log --oneline
```

### Crear una nueva rama:
```bash
git checkout -b feature/nueva-funcionalidad
```

## Personalizar el README

Edita el `README.md` para:
- Agregar tu URL de Vercel cuando despliegues
- Agregar capturas de pantalla
- Agregar tu información de contacto
- Personalizar la descripción

## Ejemplo de estructura final en GitHub:

```
tu-usuario/expense-tracker-web/
│
├── 📄 README.md ← Página principal visible
├── 🚀 QUICKSTART.md
├── 📦 DEPLOYMENT.md
├── 🔄 MIGRATION.md
├── 📋 SUMMARY.md
│
├── 📁 app/
├── 📁 components/
├── 📁 lib/
├── 📁 types/
├── 📁 public/
│
└── ⚙️ Archivos de configuración
```

## Siguientes pasos

Después de subir a GitHub:

1. ✅ **Desplegar en Vercel** (ver `DEPLOYMENT.md`)
2. 📝 **Agregar badges al README**:
   ```markdown
   ![Deploy](https://img.shields.io/badge/deploy-vercel-black)
   ![Next.js](https://img.shields.io/badge/Next.js-14-blue)
   ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
   ```
3. 📸 **Agregar screenshots** en `/public/screenshots/`
4. ⭐ **Invitar a colaboradores** si trabajas en equipo

## Solución de problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
```

### Error: "Permission denied"
Necesitas configurar tus credenciales de GitHub:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Autenticación con GitHub
GitHub ya no acepta contraseñas. Usa:
- **GitHub CLI**: `gh auth login`
- **SSH Keys**: [Guía oficial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- **Personal Access Token**: [Guía oficial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## 🎉 ¡Listo!

Tu proyecto ahora está en GitHub y listo para:
- ✅ Compartir con otros
- ✅ Colaborar en equipo
- ✅ Conectar con Vercel
- ✅ Contribuir a open source

---

**Siguiente paso**: Lee `DEPLOYMENT.md` para desplegar en Vercel 🚀
