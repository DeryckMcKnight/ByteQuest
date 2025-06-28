#!/bin/bash

# Script para deploy manual no GitHub Pages
# Execute este script para fazer deploy da aplicação

echo "🚀 Iniciando deploy do ByteQuest para GitHub Pages..."

# Verificar se estamos na branch main
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  Aviso: Você não está na branch main. Branch atual: $current_branch"
    read -p "Deseja continuar? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deploy cancelado."
        exit 1
    fi
fi

# Entrar na pasta da aplicação
cd codelingo-app

# Instalar dependências
echo "📦 Instalando dependências..."
pnpm install

# Fazer build da aplicação
echo "🔨 Fazendo build da aplicação..."
pnpm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "dist" ]; then
    echo "❌ Erro: Pasta dist não foi criada. Build falhou."
    exit 1
fi

# Voltar para a raiz do projeto
cd ..

# Fazer commit das mudanças (se houver)
echo "💾 Verificando mudanças..."
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Fazendo commit das mudanças..."
    git add .
    git commit -m "🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Push para o repositório
echo "⬆️  Enviando para o GitHub..."
git push origin main

echo "✅ Deploy concluído!"
echo "🌐 Sua aplicação estará disponível em alguns minutos em:"
echo "   https://deryckmcknight.github.io/ByteQuest"
echo ""
echo "📋 Próximos passos:"
echo "1. Vá para as configurações do seu repositório no GitHub"
echo "2. Na seção 'Pages', configure a fonte como 'GitHub Actions'"
echo "3. Aguarde alguns minutos para o deploy ser processado"

