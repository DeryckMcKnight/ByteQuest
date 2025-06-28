# 🚀 Guia de Setup para GitHub e GitHub Pages

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado localmente
- Node.js 18+ e pnpm instalados

## 🔧 Setup Inicial

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome do repositório: `ByteQuest`
4. Descrição: `Aplicativo educacional gamificado para ensinar programação`
5. Marque como **Público**
6. **NÃO** inicialize com README (já temos um)
7. Clique em "Create repository"

### 2. Conectar Projeto Local ao GitHub

```bash
# Na pasta do projeto ByteQuest
git init
git add .
git commit -m "🎉 Initial commit: ByteQuest - Aplicativo educacional gamificado"

# Conectar ao repositório remoto
git remote add origin https://github.com/DeryckMcKnight/ByteQuest.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages

#### Opção A: Via GitHub Actions (Recomendado)

1. Vá para o repositório no GitHub
2. Clique em **Settings** → **Pages**
3. Em "Source", selecione **GitHub Actions**
4. O workflow já está configurado em `.github/workflows/deploy.yml`
5. Faça um push e o deploy será automático!

#### Opção B: Deploy Manual

```bash
# Execute o script de deploy
./deploy-github-pages.sh
```

## 🌐 URLs de Acesso

Após o setup, sua aplicação estará disponível em:

- **GitHub Repository**: `https://github.com/DeryckMcKnight/ByteQuest`
- **GitHub Pages**: `https://deryckmcknight.github.io/ByteQuest`
- **Demo Atual**: `https://vlbsskch.manus.space`

## 🔄 Workflow de Desenvolvimento

### Para fazer mudanças:

```bash
# 1. Fazer suas alterações no código

# 2. Testar localmente
cd codelingo-app
pnpm run dev

# 3. Fazer build para verificar se está tudo ok
pnpm run build

# 4. Commit e push
git add .
git commit -m "✨ feat: sua descrição da mudança"
git push origin main

# 5. O GitHub Actions fará o deploy automaticamente!
```

## 📁 Estrutura para GitHub

```
ByteQuest/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── codelingo-app/               # Aplicação React
│   ├── src/                     # Código fonte
│   ├── public/                  # Arquivos públicos
│   ├── dist/                    # Build (ignorado pelo git)
│   └── package.json             # Dependências da app
├── docs/                        # Documentação
├── .gitignore                   # Arquivos ignorados pelo git
├── README.md                    # Documentação principal
├── package.json                 # Configuração do projeto
├── deploy-github-pages.sh       # Script de deploy manual
└── GITHUB_SETUP.md             # Este arquivo
```

## 🛠️ Scripts Disponíveis

```bash
# Instalar dependências
pnpm install-deps

# Executar em desenvolvimento
pnpm run dev

# Fazer build
pnpm run build

# Preview do build
pnpm run preview

# Deploy manual para GitHub Pages
pnpm run deploy
```

## 🔧 Configurações Importantes

### Vite Config
O arquivo `vite.config.js` está configurado para:
- Base path correto para GitHub Pages
- Otimizações de build
- Code splitting para melhor performance

### GitHub Actions
O workflow em `.github/workflows/deploy.yml`:
- Executa a cada push na branch `main`
- Instala dependências automaticamente
- Faz build da aplicação
- Deploy para GitHub Pages

## 🐛 Troubleshooting

### Problema: Página em branco no GitHub Pages
**Solução**: Verifique se o `base` no `vite.config.js` está correto:
```js
base: process.env.NODE_ENV === 'production' ? '/ByteQuest/' : '/'
```

### Problema: GitHub Actions falhando
**Soluções**:
1. Verifique se o repositório tem permissões para GitHub Pages
2. Confirme que a branch `main` existe
3. Verifique os logs do workflow na aba "Actions"

### Problema: Assets não carregando
**Solução**: Certifique-se de que todos os caminhos são relativos e não absolutos.

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do GitHub Actions
2. Teste o build localmente: `pnpm run build`
3. Verifique se todas as dependências estão instaladas

## 🎉 Pronto!

Agora você tem:
- ✅ Repositório no GitHub
- ✅ Deploy automático via GitHub Actions
- ✅ Aplicação rodando no GitHub Pages
- ✅ Workflow de desenvolvimento configurado

**Sua aplicação estará disponível em**: `https://deryckmcknight.github.io/ByteQuest`

