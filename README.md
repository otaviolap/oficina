# AutoTech - Oficina Mecânica Especializada

Site institucional para oficina mecânica desenvolvido com React + TypeScript + Vite + Tailwind CSS.

## 🚀 Deploy no GitHub Pages

### Configuração Automática (Recomendado)
O projeto está configurado com GitHub Actions para deploy automático. Basta fazer push para a branch `main`:

```bash
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main
```

### Deploy Manual
Para fazer deploy manual:

```bash
npm run deploy
```

### Configuração Necessária no GitHub
1. Vá para as configurações do repositório no GitHub
2. Clique em "Pages" no menu lateral
3. Configure o Source como "Deploy from a branch"
4. Selecione a branch `gh-pages`
5. Clique em "Save"

## 🛠️ Desenvolvimento

### Instalação
```bash
npm install
```

### Executar em modo desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview do build
```bash
npm run preview
```

## 📱 Funcionalidades

- Design responsivo
- Seções: Hero, Sobre, Serviços, Galeria, Depoimentos, Contato
- Animações suaves com scroll
- Formulário de contato
- Galeria de imagens com modal
- Integração com WhatsApp

## 🌐 Acesso ao Site

Após o deploy, o site estará disponível em:
`https://[seu-usuario].github.io/oficina/`

## 🔧 Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)
- GitHub Pages
- GitHub Actions