# Instruções para Captura de Screenshots

## Método 1: Automático com Puppeteer (Recomendado)

### Setup
```bash
npm init -y
npm install puppeteer
```

### Script: capture-screenshots.js
```javascript
const puppeteer = require('puppeteer');
const fs = require('fs');

const sites = [
  // Landing Pages - Top 20
  { name: 'eyedrop', url: 'https://onepagelove.com/eyedrop' },
  { name: 'interface-craft', url: 'https://onepagelove.com/interface-craft' },
  { name: 'async', url: 'https://onepagelove.com/async' },
  { name: 'krida', url: 'https://onepagelove.com/krida' },
  { name: 'sort', url: 'https://onepagelove.com/sort' },
  { name: 'razorpay-card-stack', url: 'https://onepagelove.com/razorpay-card-stack' },
  { name: 'ace-me', url: 'https://onepagelove.com/ace-me' },
  { name: 'pencil', url: 'https://onepagelove.com/pencil' },
  { name: 'frames', url: 'https://onepagelove.com/frames' },
  { name: 'operate', url: 'https://onepagelove.com/operate' },

  // SaaS - Top 10
  { name: 'outseta', url: 'https://onepagelove.com/outseta-memberstack-alternative' },
  { name: 'monologue', url: 'https://onepagelove.com/monologue' },
  { name: 'wist', url: 'https://onepagelove.com/wist' },
  { name: 'fizzy', url: 'https://onepagelove.com/fizzy' },
  { name: 'quid-ai', url: 'https://onepagelove.com/quid-ai' },

  // Portfolios - Top 10
  { name: 'dann-petty', url: 'https://onepagelove.com/dann-petty-2026' },
  { name: 'benjamin-den-boer', url: 'https://onepagelove.com/benjamin-den-boer-2026' },
  { name: 'brian-cohen', url: 'https://onepagelove.com/brian-cohen' },
  { name: 'studio-nika', url: 'https://onepagelove.com/studio-nika' },
  { name: 'aaron-sananes', url: 'https://onepagelove.com/aaron-sananes' },

  // Startups - Top 10
  { name: 'manifold-bio', url: 'https://onepagelove.com/manifold-bio' },
  { name: 'topology', url: 'https://onepagelove.com/topology' },
  { name: 'cardiatec', url: 'https://onepagelove.com/cardiatec' },
  { name: 'leya', url: 'https://onepagelove.com/leya' },
  { name: 'noon', url: 'https://onepagelove.com/noon' },

  // Eventos - Top 5
  { name: 'tokyo-design-forum', url: 'https://onepagelove.com/tdf' },
  { name: 'creative-south', url: 'https://onepagelove.com/creative-south-2026' },
  { name: 'fifa-world-cup', url: 'https://onepagelove.com/fifa-world-cup-2026-nynj' },

  // Restaurantes - Top 5
  { name: 'devonshire', url: 'https://onepagelove.com/devonshire' },
  { name: 'nowa', url: 'https://onepagelove.com/nowa' },
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({ headless: 'new' });

  for (const site of sites) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900 });
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Captura desktop
      await page.screenshot({
        path: `desktop/${site.name}.png`,
        fullPage: false
      });

      // Captura mobile
      await page.setViewport({ width: 390, height: 844 });
      await page.screenshot({
        path: `mobile/${site.name}.png`,
        fullPage: false
      });

      // Captura full page
      await page.setViewport({ width: 1440, height: 900 });
      await page.screenshot({
        path: `fullpage/${site.name}.png`,
        fullPage: true
      });

      console.log(`Captured: ${site.name}`);
      await page.close();
    } catch (error) {
      console.error(`Failed: ${site.name} - ${error.message}`);
    }
  }

  await browser.close();
}

// Criar pastas
['desktop', 'mobile', 'fullpage'].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

captureScreenshots();
```

### Executar
```bash
node capture-screenshots.js
```

---

## Método 2: Manual com Browser Extension

### Extensões Recomendadas
1. **GoFullPage** (Chrome) - Captura página inteira
2. **Fireshot** (Chrome/Firefox) - Captura com opções

### Processo Manual
1. Abrir cada URL do arquivo `referencias-curadas.md`
2. Capturar em 3 resoluções:
   - Desktop: 1440x900
   - Tablet: 768x1024
   - Mobile: 390x844
3. Salvar com nomenclatura: `categoria-nome-resolucao.png`

---

## Método 3: API de Screenshot

### Serviços
- **screenshotapi.net** - 100 screenshots grátis/mês
- **urlbox.io** - API profissional
- **screenshot.guru** - Gratuito com limite

### Exemplo com cURL
```bash
curl "https://shot.screenshotapi.net/screenshot?token=SEU_TOKEN&url=https://onepagelove.com/eyedrop&width=1440&height=900&output=image" -o eyedrop.png
```

---

## Organização das Pastas

```
screenshots/
├── desktop/           # 1440x900
│   ├── landing/
│   ├── saas/
│   ├── portfolio/
│   └── ...
├── mobile/            # 390x844
│   ├── landing/
│   ├── saas/
│   └── ...
├── fullpage/          # Página completa
│   ├── landing/
│   └── ...
└── components/        # Recortes de componentes
    ├── headers/
    ├── heroes/
    ├── ctas/
    ├── footers/
    └── cards/
```

---

## Prioridade de Captura

### Must Have (Top 30)
Sites com melhor design para referência imediata:
1. dann-petty-2026 (portfolio)
2. eyedrop (landing)
3. krida (saas)
4. tokyo-design-forum (evento)
5. devonshire (restaurante)
...

### Nice to Have (Restante)
Capturar conforme necessidade do projeto.

---

## Uso no Agente Designer/UXer

Quando o agente precisar de referência visual:
```
1. Consultar referencias-curadas.md
2. Identificar categoria relevante
3. Verificar se screenshot existe em /screenshots
4. Se não existir, usar URL do onepagelove para referência
```
