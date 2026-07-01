@echo off
title VivaPay - Build para Live Server (extensao)
cd /d "%~dp0"

echo.
echo  Gerando build na pasta dist...
echo.

call npm run build
if errorlevel 1 (
  echo  [ERRO] Falha no build.
  pause
  exit /b 1
)

echo.
echo  ==========================================
echo   Pronto! Agora use Live Server:
echo  ==========================================
echo.
echo  Opcao 1: Clique em "Go Live" na barra do Cursor
echo           (ja configurado para abrir a pasta dist)
echo.
echo  Opcao 2: Botao direito na pasta dist
echo           -^> Open with Live Server
echo.
echo  Opcao 3: Duplo clique em live-server.bat
echo           (build automatico + servidor na porta 5500)
echo.
echo  Dica: execute "npm run build:watch" em outro terminal
echo        para atualizar o site ao salvar alteracoes.
echo.
pause
