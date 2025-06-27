# ByteQuest - Aplicativo Educacional Gamificado

## 🚀 Sobre o Projeto

ByteQuest é um aplicativo educacional gamificado inspirado no Duolingo, desenvolvido para ensinar programação de forma divertida e interativa. O app funciona como um Progressive Web App (PWA), sendo acessível tanto em dispositivos móveis quanto em navegadores desktop.

## 🎯 Funcionalidades Principais

### 🎮 Sistema de Gamificação
- **Sistema de XP e Níveis**: Ganhe experiência e suba de nível
- **Vidas/Corações**: Sistema de vidas que incentiva o aprendizado cuidadoso
- **Streak de Dias**: Mantenha uma sequência de dias estudando
- **Conquistas**: Desbloqueie medalhas por marcos alcançados
- **Ranking/Leaderboard**: Compare seu progresso com outros usuários

### 📚 Conteúdo Educacional
- **Python Básico**: Variáveis, operadores, condicionais, loops, funções
- **JavaScript Essencial**: Fundamentos da linguagem da web
- **HTML & CSS**: Estrutura e estilização de páginas web

### 🎯 Tipos de Exercícios
- **Múltipla Escolha**: Questões tradicionais com feedback instantâneo
- **Arrastar e Soltar**: Organize blocos de código na ordem correta
- **Preencher Lacunas**: Complete códigos com as palavras corretas
- **Editor de Código**: Ambiente para praticar programação ao vivo

### 🌙 Recursos Adicionais
- **Modo Noturno/Claro**: Alterne entre temas para melhor experiência
- **Interface Responsiva**: Funciona perfeitamente em mobile e desktop
- **PWA**: Instale como aplicativo nativo no seu dispositivo
- **Feedback Visual**: Animações e efeitos que tornam o aprendizado mais envolvente

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**: Biblioteca principal para interface
- **Vite**: Build tool moderna e rápida
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Ícones modernos e consistentes
- **React Router**: Navegação entre páginas

### PWA
- **Service Worker**: Cache offline e performance
- **Web App Manifest**: Instalação como app nativo
- **Responsive Design**: Adaptação para todos os dispositivos

### Gamificação
- **Sistema de Estado Local**: Gerenciamento de progresso
- **Animações CSS**: Feedback visual interativo
- **Context API**: Gerenciamento de tema e estado global

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd CodeLingo/codelingo-app

# Instale as dependências
pnpm install

# Execute em modo de desenvolvimento
pnpm run dev

# Para build de produção
pnpm run build
```

## 🌐 Deploy

### Versão Online
O aplicativo está disponível online em: **https://vlbsskch.manus.space**

### GitHub Pages
Para hospedar no GitHub Pages, siga o guia em [GITHUB_SETUP.md](GITHUB_SETUP.md)

Após configurar, estará disponível em: `https://[seu-usuario].github.io/ByteQuest`

### Como usar:
1. Acesse o link acima
2. Clique em "Continuar com Google" para fazer login demo
3. Explore as trilhas de aprendizado
4. Complete lições e ganhe XP
5. Acompanhe seu progresso no perfil

## 📱 Instalação como PWA

### No Desktop (Chrome/Edge):
1. Acesse o site
2. Clique no ícone de instalação na barra de endereços
3. Confirme a instalação

### No Mobile:
1. Acesse o site no navegador
2. Toque no menu do navegador
3. Selecione "Adicionar à tela inicial"

## 🎨 Design e UX

### Inspiração Duolingo
- **Cores vibrantes**: Interface alegre e motivadora
- **Feedback imediato**: Respostas instantâneas com animações
- **Progressão visual**: Barras de progresso e indicadores claros
- **Gamificação**: Elementos de jogo que mantêm o engajamento

### Acessibilidade
- **Modo escuro**: Reduz fadiga visual
- **Responsividade**: Funciona em qualquer tamanho de tela
- **Navegação intuitiva**: Interface familiar e fácil de usar

## 📊 Estrutura do Projeto

```
codelingo-app/
├── public/
│   ├── manifest.json          # Configuração PWA
│   └── sw.js                  # Service Worker
├── src/
│   ├── components/
│   │   ├── game/              # Componentes de gamificação
│   │   ├── layout/            # Layout e navegação
│   │   └── pages/             # Páginas principais
│   ├── contexts/              # Context API (tema)
│   ├── data/                  # Banco de dados de lições
│   └── lib/                   # Configurações (Supabase)
└── dist/                      # Build de produção
```

## 🔮 Próximos Passos

### Funcionalidades Futuras
- [ ] Integração com backend real (Supabase/Firebase)
- [ ] Sistema de amigos e competições
- [ ] Mais linguagens de programação
- [ ] Certificados de conclusão
- [ ] Modo offline completo
- [ ] Notificações push
- [ ] Análise de código com IA

### Melhorias Técnicas
- [ ] Testes automatizados
- [ ] CI/CD pipeline
- [ ] Monitoramento de performance
- [ ] SEO otimizado

## 👥 Contribuição

Este projeto foi desenvolvido como demonstração de um aplicativo educacional moderno. Contribuições são bem-vindas!

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

**ByteQuest** - Transformando o aprendizado de programação em uma aventura divertida! 🚀

