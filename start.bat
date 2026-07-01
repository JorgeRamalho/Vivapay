@echo off
title VivaPay - Abrir Site
cd /d "%~dp0"

echo.
echo  ==========================================
echo    VivaPay - Iniciando servidor do site...
echo  ==========================================
echo.

where npm >nul 2>nul
if errorlevel 1 (
  echo  [ERRO] Node.js nao encontrado.
  echo  Baixe e instale em: https://nodejs.org
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\vite" (
  echo  Instalando dependencias pela primeira vez...
  call npm install
  if errorlevel 1 (
    echo  [ERRO] Falha ao instalar dependencias.
    pause
    exit /b 1
  )
)

echo  Servidor: http://localhost:5173
echo  O navegador abrira automaticamente.
echo  Para encerrar: feche esta janela ou pressione Ctrl+C
echo.

call npm run dev

pause
