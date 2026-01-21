# Design System Reference - Jobim

> Padrões visuais extraídos das melhores referências do onepagelove.com

---

## 1. Tipografia

### Escala Tipográfica (Perfect Fourth - 1.333)

```css
:root {
  /* Base: 16px */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.333rem;   /* 21px */
  --text-2xl: 1.777rem;  /* 28px */
  --text-3xl: 2.369rem;  /* 38px */
  --text-4xl: 3.157rem;  /* 51px */
  --text-5xl: 4.209rem;  /* 67px */
  --text-6xl: 5.61rem;   /* 90px */
}
```

### Fontes Populares (baseado nas referências)

| Tipo | Fontes | Uso |
|------|--------|-----|
| **Sans-Serif Moderna** | Inter, Satoshi, Geist, Plus Jakarta Sans | Body text, UI |
| **Sans-Serif Geometric** | Circular, Gilroy, Poppins | Headlines SaaS |
| **Serif Elegante** | Fraunces, Playfair Display, Instrument Serif | Headlines premium |
| **Mono** | JetBrains Mono, IBM Plex Mono, Fira Code | Code, dados |
| **Display** | Clash Display, Cabinet Grotesk, General Sans | Hero headlines |

### Hierarquia Típica

```css
/* Headlines */
h1 { font-size: var(--text-5xl); font-weight: 700; line-height: 1.1; }
h2 { font-size: var(--text-4xl); font-weight: 600; line-height: 1.2; }
h3 { font-size: var(--text-3xl); font-weight: 600; line-height: 1.25; }
h4 { font-size: var(--text-2xl); font-weight: 500; line-height: 1.3; }

/* Body */
.body-lg { font-size: var(--text-lg); line-height: 1.6; }
.body { font-size: var(--text-base); line-height: 1.6; }
.body-sm { font-size: var(--text-sm); line-height: 1.5; }

/* UI */
.label { font-size: var(--text-sm); font-weight: 500; letter-spacing: 0.02em; }
.caption { font-size: var(--text-xs); color: var(--text-secondary); }
```

---

## 2. Cores

### Sistema HSL com 10 Tons

```css
:root {
  /* Primary (exemplo: azul) */
  --primary-50:  hsl(220, 100%, 97%);
  --primary-100: hsl(220, 100%, 94%);
  --primary-200: hsl(220, 96%, 86%);
  --primary-300: hsl(220, 94%, 74%);
  --primary-400: hsl(220, 92%, 62%);
  --primary-500: hsl(220, 90%, 50%);  /* Principal */
  --primary-600: hsl(220, 88%, 42%);
  --primary-700: hsl(220, 86%, 34%);
  --primary-800: hsl(220, 84%, 26%);
  --primary-900: hsl(220, 82%, 18%);
  --primary-950: hsl(220, 80%, 10%);

  /* Neutral (cinzas) */
  --neutral-50:  hsl(0, 0%, 98%);
  --neutral-100: hsl(0, 0%, 96%);
  --neutral-200: hsl(0, 0%, 90%);
  --neutral-300: hsl(0, 0%, 80%);
  --neutral-400: hsl(0, 0%, 65%);
  --neutral-500: hsl(0, 0%, 50%);
  --neutral-600: hsl(0, 0%, 40%);
  --neutral-700: hsl(0, 0%, 30%);
  --neutral-800: hsl(0, 0%, 20%);
  --neutral-900: hsl(0, 0%, 12%);
  --neutral-950: hsl(0, 0%, 6%);

  /* Semantic */
  --success: hsl(142, 76%, 36%);
  --warning: hsl(38, 92%, 50%);
  --error: hsl(0, 84%, 60%);
  --info: hsl(200, 98%, 48%);
}
```

### Paletas Populares (das referências)

| Estilo | Cores | Referências |
|--------|-------|-------------|
| **Minimalista** | Preto + Branco + 1 accent | dann-petty, aaron-sananes |
| **SaaS Moderno** | Azul/Purple + Neutral | krida, outseta, quid-ai |
| **Tech/AI** | Gradientes dark + Neon | cardiatec, noon |
| **Premium** | Off-white + Gold/Bronze | devonshire, nowa |
| **Criativo** | Multi-color vibrante | creative-south, pixel-pushers |
| **Natureza** | Verdes + Earth tones | manifold-bio, eat-real-food |

### Contraste WCAG

```
Texto normal: mínimo 4.5:1
Texto grande (18px+): mínimo 3:1
UI Components: mínimo 3:1
```

---

## 3. Espaçamento

### Sistema de 8px

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Uso Típico

| Elemento | Espaçamento |
|----------|-------------|
| Entre seções | space-24 a space-32 |
| Dentro de seções | space-12 a space-16 |
| Entre cards | space-6 a space-8 |
| Padding de cards | space-6 a space-8 |
| Entre elementos de form | space-4 |
| Padding de botões | space-3 (y) / space-6 (x) |
| Entre texto e ícone | space-2 |

---

## 4. Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px - inputs, tags */
  --radius-md: 0.5rem;    /* 8px - buttons, cards */
  --radius-lg: 0.75rem;   /* 12px - cards destacados */
  --radius-xl: 1rem;      /* 16px - modals, containers */
  --radius-2xl: 1.5rem;   /* 24px - hero sections */
  --radius-full: 9999px;  /* pills, avatars */
}
```

### Tendências Observadas

- **SaaS Moderno**: radius-lg a radius-xl
- **Minimalista**: radius-none a radius-sm
- **Friendly/Playful**: radius-xl a radius-2xl
- **Pills/Tags**: radius-full

---

## 5. Sombras

```css
:root {
  /* Elevação sutil */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  /* Elevação padrão */
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
               0 2px 4px -2px rgb(0 0 0 / 0.1);

  /* Elevação destacada */
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
               0 4px 6px -4px rgb(0 0 0 / 0.1);

  /* Elevação dramática */
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1),
               0 8px 10px -6px rgb(0 0 0 / 0.1);

  /* Para dark mode */
  --shadow-glow: 0 0 20px rgb(var(--primary-500) / 0.3);
}
```

---

## 6. Grid & Layout

### Container Widths

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
}

.container {
  width: 100%;
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
}
```

### Grid Patterns

```css
/* 12 colunas */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Auto-fill responsivo */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
}

/* Bento grid (tendência 2024-2025) */
.grid-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: var(--space-4);
}
```

---

## 7. Componentes Comuns

### Botões

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 150ms ease;
}

.btn-primary {
  background: var(--primary-500);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-600);
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--neutral-300);
  color: var(--neutral-900);
}

.btn-ghost {
  background: transparent;
  color: var(--neutral-600);
}

/* Tamanhos */
.btn-sm { padding: var(--space-2) var(--space-4); font-size: var(--text-xs); }
.btn-lg { padding: var(--space-4) var(--space-8); font-size: var(--text-base); }
```

### Cards

```css
.card {
  background: white;
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: all 200ms ease;
}

.card:hover {
  border-color: var(--neutral-300);
  box-shadow: var(--shadow-md);
}

.card-interactive:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Inputs

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  border: 1px solid var(--neutral-300);
  border-radius: var(--radius-md);
  background: white;
  transition: all 150ms ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.input::placeholder {
  color: var(--neutral-400);
}
```

---

## 8. Animações & Transições

### Timing Functions

```css
:root {
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-elastic: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}
```

### Durações

```css
:root {
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
}
```

### Animações Populares

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale in */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* Entrance staggered */
.stagger > * {
  animation: slideUp 0.5s var(--ease-out) forwards;
  opacity: 0;
}
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 100ms; }
.stagger > *:nth-child(3) { animation-delay: 200ms; }
```

---

## 9. Breakpoints Responsivos

```css
/* Mobile first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### Touch Targets

```css
/* Mínimo 44x44px para áreas clicáveis */
.touch-target {
  min-width: 44px;
  min-height: 44px;
}
```

---

## 10. Dark Mode

```css
:root {
  color-scheme: light dark;
}

/* Cores para dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--neutral-950);
    --bg-secondary: var(--neutral-900);
    --bg-tertiary: var(--neutral-800);

    --text-primary: var(--neutral-50);
    --text-secondary: var(--neutral-400);

    --border-default: var(--neutral-800);
    --border-hover: var(--neutral-700);
  }
}

/* Toggle manual */
[data-theme="dark"] {
  --bg-primary: var(--neutral-950);
  /* ... */
}
```

---

## 11. Patterns de Layout por Categoria

### Landing Pages

```
Hero Section:
├── Badge/Announcement bar
├── Headline (text-5xl, bold)
├── Subheadline (text-xl, neutral-600)
├── CTA buttons (primary + secondary)
└── Hero image/illustration

Features Section:
├── Section title (text-3xl, center)
├── Grid 3 colunas
└── Feature cards com ícone + título + descrição

Social Proof:
├── Logos de clientes
├── Testimonial cards
└── Métricas numéricas
```

### SaaS

```
Header:
├── Logo
├── Navigation
├── CTA button

Pricing:
├── Toggle mensal/anual
├── 3 pricing cards
└── Feature comparison table

Dashboard (se aplicável):
├── Sidebar navigation
├── Top bar com search + user
├── Main content area
└── Cards de métricas
```

### Portfolio

```
Hero:
├── Nome grande (text-6xl)
├── Título/Role
└── Scroll indicator

Projects Grid:
├── Bento ou masonry layout
├── Hover com título + categoria
└── Click para case study

About:
├── Foto + bio
├── Skills/Tools
└── Contact info
```

---

## 12. Checklist de Qualidade

### Acessibilidade
- [ ] Contraste WCAG AA (4.5:1 texto, 3:1 UI)
- [ ] Focus states visíveis
- [ ] Touch targets 44px+
- [ ] Alt text em imagens
- [ ] Hierarquia de headings correta

### Performance
- [ ] Imagens otimizadas (WebP/AVIF)
- [ ] Fontes com font-display: swap
- [ ] Lazy loading abaixo do fold
- [ ] Critical CSS inline

### Consistência
- [ ] Espaçamentos múltiplos de 8
- [ ] Cores do sistema definido
- [ ] Tipografia da escala
- [ ] Border radius consistente
- [ ] Sombras dos níveis definidos

---

*Baseado na análise de 152 sites do onepagelove.com*
