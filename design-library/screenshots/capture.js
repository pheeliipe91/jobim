const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Sites organizados por categoria
const sites = {
  landing: [
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
    { name: 'granola', url: 'https://onepagelove.com/granola' },
    { name: 'razorpay-bold', url: 'https://onepagelove.com/razorpay-bold' },
    { name: 'superwhisper', url: 'https://onepagelove.com/superwhisper' },
    { name: 'voice-notes', url: 'https://onepagelove.com/voice-notes' },
    { name: 'comet', url: 'https://onepagelove.com/comet' },
  ],
  saas: [
    { name: 'outseta', url: 'https://onepagelove.com/outseta-memberstack-alternative' },
    { name: 'monologue', url: 'https://onepagelove.com/monologue' },
    { name: 'wist', url: 'https://onepagelove.com/wist' },
    { name: 'fizzy', url: 'https://onepagelove.com/fizzy' },
    { name: 'visitors', url: 'https://onepagelove.com/visitors' },
    { name: 'transform9', url: 'https://onepagelove.com/transform9' },
    { name: 'quid-ai', url: 'https://onepagelove.com/quid-ai' },
    { name: 'sorrel', url: 'https://onepagelove.com/sorrel' },
    { name: 'kyoso', url: 'https://onepagelove.com/kyoso' },
    { name: 'tempo', url: 'https://onepagelove.com/tempo' },
  ],
  portfolio: [
    { name: 'dann-petty', url: 'https://onepagelove.com/dann-petty-2026' },
    { name: 'benjamin-den-boer', url: 'https://onepagelove.com/benjamin-den-boer-2026' },
    { name: 'brian-cohen', url: 'https://onepagelove.com/brian-cohen' },
    { name: 'studio-nika', url: 'https://onepagelove.com/studio-nika' },
    { name: 'aaron-sananes', url: 'https://onepagelove.com/aaron-sananes' },
    { name: 'mackenzie-child', url: 'https://onepagelove.com/mackenzie-child' },
    { name: 'clint-balcom', url: 'https://onepagelove.com/clint-balcom' },
    { name: 'hyle', url: 'https://onepagelove.com/hyle' },
    { name: 'dave-hawkins', url: 'https://onepagelove.com/dave-hawkins' },
    { name: 're-do', url: 'https://onepagelove.com/re-do' },
  ],
  startup: [
    { name: 'manifold-bio', url: 'https://onepagelove.com/manifold-bio' },
    { name: 'topology', url: 'https://onepagelove.com/topology' },
    { name: 'cardiatec', url: 'https://onepagelove.com/cardiatec' },
    { name: 'leya', url: 'https://onepagelove.com/leya' },
    { name: 'noon', url: 'https://onepagelove.com/noon' },
    { name: 'safebox', url: 'https://onepagelove.com/safebox' },
    { name: 'genesis-soil', url: 'https://onepagelove.com/genesis-soil' },
    { name: 'sora-fuel', url: 'https://onepagelove.com/sora-fuel' },
  ],
  evento: [
    { name: 'tokyo-design-forum', url: 'https://onepagelove.com/tdf' },
    { name: 'creative-south', url: 'https://onepagelove.com/creative-south-2026' },
    { name: 'fifa-world-cup', url: 'https://onepagelove.com/fifa-world-cup-2026-nynj' },
    { name: 'pixel-pushers', url: 'https://onepagelove.com/pixel-pushers' },
    { name: 'valiocon', url: 'https://onepagelove.com/valiocon-2025' },
  ],
  restaurante: [
    { name: 'devonshire', url: 'https://onepagelove.com/devonshire' },
    { name: 'nowa', url: 'https://onepagelove.com/nowa' },
    { name: 'fridges-market', url: 'https://onepagelove.com/fridges-market' },
    { name: 'le-petit-bleu', url: 'https://onepagelove.com/le-petit-bleu' },
    { name: 'monte', url: 'https://onepagelove.com/monte' },
  ],
};

// Criar diretórios
const dirs = ['desktop', 'mobile', 'fullpage'];
const categories = Object.keys(sites);

for (const dir of dirs) {
  for (const cat of categories) {
    const fullPath = path.join(__dirname, dir, cat);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  }
}

async function captureScreenshots() {
  console.log('Iniciando captura de screenshots...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let total = 0;
  let success = 0;
  let failed = 0;

  for (const [category, siteList] of Object.entries(sites)) {
    console.log(`\n📁 Categoria: ${category.toUpperCase()}`);
    console.log('─'.repeat(40));

    for (const site of siteList) {
      total++;
      try {
        const page = await browser.newPage();

        // Configurar user agent
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // Desktop (1440x900)
        await page.setViewport({ width: 1440, height: 900 });
        await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });

        // Esperar um pouco para animações carregarem
        await new Promise(r => setTimeout(r, 2000));

        // Screenshot desktop
        await page.screenshot({
          path: path.join(__dirname, 'desktop', category, `${site.name}.png`),
          fullPage: false
        });

        // Screenshot mobile (390x844 - iPhone 14)
        await page.setViewport({ width: 390, height: 844 });
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({
          path: path.join(__dirname, 'mobile', category, `${site.name}.png`),
          fullPage: false
        });

        // Screenshot fullpage (desktop)
        await page.setViewport({ width: 1440, height: 900 });
        await page.screenshot({
          path: path.join(__dirname, 'fullpage', category, `${site.name}.png`),
          fullPage: true
        });

        console.log(`  ✅ ${site.name}`);
        success++;

        await page.close();
      } catch (error) {
        console.log(`  ❌ ${site.name} - ${error.message.slice(0, 50)}`);
        failed++;
      }
    }
  }

  await browser.close();

  console.log('\n' + '═'.repeat(40));
  console.log('📊 RESUMO');
  console.log('═'.repeat(40));
  console.log(`Total: ${total}`);
  console.log(`Sucesso: ${success}`);
  console.log(`Falhou: ${failed}`);
  console.log(`\nScreenshots salvos em:`);
  console.log(`  - desktop/  (1440x900)`);
  console.log(`  - mobile/   (390x844)`);
  console.log(`  - fullpage/ (página completa)`);
}

captureScreenshots().catch(console.error);
