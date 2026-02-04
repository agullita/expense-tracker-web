@echo off
echo ====================================
echo  Expense Tracker - Inicio
echo ====================================
echo.

REM Verificar si existen node_modules
if not exist "node_modules" (
    echo [1/3] Instalando dependencias...
    call npm install
    echo.
)

REM Verificar si existe .env.local
if not exist ".env.local" (
    echo [ERROR] No se encontro el archivo .env.local
    echo.
    echo Por favor crea un archivo .env.local con:
    echo GEMINI_API_KEY=tu_api_key_aqui
    echo.
    pause
    exit /b
)

echo [2/3] Iniciando servidor de desarrollo...
echo.
echo La aplicacion estara disponible en:
echo http://localhost:3000
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call npm run dev
