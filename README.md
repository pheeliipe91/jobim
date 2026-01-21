# 🎹 Jobim

**Orquestrador Multi-Agente para Projetos de Software**

*Assim como Tom Jobim orquestrava harmonias complexas, o Jobim orquestra agentes de IA para criar projetos harmoniosos — do conceito ao lançamento.*

---

## O que é o Jobim?

Jobim é um sistema de orquestração que coordena múltiplos agentes de IA especializados para desenvolver projetos completos. Em vez de você conversar com um único assistente, o Jobim delega tarefas para agentes especializados e sintetiza os resultados.

```
[Sua Ideia] → 🎹 Jobim → [Projeto Lançado]
                  │
    ┌─────────────┼─────────────┐
    ▼             ▼             ▼
  Scout       Builder        Tester      ...
(Pesquisa)   (Código)        (QA)
```

## Agentes Disponíveis

| Agente | Modelo | Especialidade |
|--------|--------|---------------|
| 🎹 **Jobim** | Opus | Orquestração, estratégia, síntese |
| 🔍 **Scout** | Haiku | Pesquisa, análise de mercado, discovery |
| 🏗️ **Builder** | Sonnet | Código, arquitetura, implementação |
| 🧪 **Tester** | Sonnet | Testes, code review, segurança |
| 📦 **Shipper** | Sonnet | CI/CD, Docker, deploy |
| 🚀 **Launcher** | Sonnet | Landing page, README, marketing |
| 🎨 **Designer** | Sonnet | UI Design, visual, cores, tipografia (Laws of UX) |
| 🧠 **UXer** | Sonnet | UX Design, fluxos, usabilidade, comportamento |

## Pipeline

```
╔═══════════════════════════════════════════════════════════════════╗
║  1. DISCOVERY    2. PROTOTYPE    3. PRODUCTION   4. SHIP   5. LAUNCH
║  ────────────    ────────────    ─────────────   ──────    ────────
║  Scout           Builder         Builder         Shipper   Launcher
║  pesquisa        MVP             + Tester        CI/CD     marketing
║  análise         core features   testes          deploy    README
╚═══════════════════════════════════════════════════════════════════╝
```

## Como Usar

### No Claude Code

O Jobim funciona nativamente dentro do Claude Code. Você tem duas formas de usar:

#### Opção 1: Orquestrador Completo (`/jobim`)

```bash
# MODO AUTÔNOMO (padrão) - Jobim decide e executa tudo sozinho
/jobim new "App de tracking de hábitos com gamificação"

# MODO INTERATIVO - Para e pede aprovação a cada fase
/jobim new "App de tracking de hábitos" interactive

# Executar fase específica
/jobim run discovery
/jobim run prototype
/jobim run production
/jobim run ship
/jobim run launch

# Ver status do projeto
/jobim status

# Planejar antes de executar
/jobim plan "Sistema de notificações push"
```

### Modo Autônomo vs Interativo

| Aspecto | Autônomo (padrão) | Interativo |
|---------|-------------------|------------|
| Aprovações | Só quando crítico | A cada fase |
| Velocidade | Mais rápido | Mais controlado |
| Ideal para | Projetos simples, prototipagem | Projetos complexos, aprendizado |

**No modo autônomo, Jobim só para quando:**
- Precisa de credenciais/API keys
- Encontra ambiguidade crítica
- Erro persiste após 2 tentativas
- Descobre algo que muda o escopo significativamente

#### Opção 2: Agentes Individuais (Direto ao ponto)

```bash
# Scout - Pesquisa (Haiku - rápido e barato)
/scout "Pesquisar APIs de pagamento PIX no Brasil"
/scout "Comparar React vs Vue vs Svelte para dashboards"

# Builder - Código (Sonnet)
/builder "Criar componente de autenticação com Google OAuth"
/builder "Implementar API REST de usuários com CRUD"

# Tester - QA (Sonnet)
/tester "Revisar o código em src/services/payment.ts"
/tester "Criar testes unitários para o módulo de carrinho"

# Shipper - DevOps (Sonnet)
/shipper "Criar Dockerfile otimizado para Node.js"
/shipper "Configurar GitHub Actions para CI/CD"

# Launcher - Marketing (Sonnet)
/launcher "Criar README profissional para o projeto"
/launcher "Gerar posts de lançamento para Twitter e LinkedIn"

# Designer - UI Design (Sonnet) - COM LAWS OF UX
/designer "Criar sistema de cores para o dashboard"
/designer "Revisar cards de produto do e-commerce"
/designer "Criar componentes de formulário acessíveis"

# UXer - UX Design (Sonnet) - COM LAWS OF UX
/uxer "Analisar fluxo de checkout e reduzir fricção"
/uxer "Melhorar onboarding de novos usuários"
/uxer "Mapear jornada do usuário no app"
```

### Linguagem Natural

Você também pode simplesmente conversar:

```
"Jobim, quero criar um SaaS de gestão de projetos para freelancers"

"Scout, pesquise os principais competidores de Notion"

"Builder, implemente um sistema de login com Google OAuth"

"Tester, revise o código do módulo de pagamentos"
```

## Estrutura de Arquivos

```
Jobim/
├── .claude/
│   ├── commands/
│   │   └── jobim.md          # Slash command /jobim
│   └── agents/
│       ├── jobim.md          # Orquestrador
│       ├── scout.md          # Pesquisa
│       ├── builder.md        # Desenvolvimento
│       ├── tester.md         # QA
│       ├── shipper.md        # DevOps
│       └── launcher.md       # Marketing
├── jobim.yaml                # Configuração
└── README.md                 # Este arquivo
```

## Configuração

Edite `jobim.yaml` para customizar:

```yaml
# Modelos usados
models:
  orchestrator: opus      # opus ou sonnet
  workers: sonnet         # sonnet ou haiku

# Fases que requerem aprovação
pipeline:
  checkpoints:
    - discovery
    - prototype

# Camadas de inteligência
intelligence:
  meta_cognition: true    # Reflexão antes de agir
  self_healing: true      # Recuperação de falhas
  consensus: true         # Decisões com múltiplos agentes
```

## Camadas de Inteligência

O Jobim não é apenas um delegador — ele possui camadas avançadas de inteligência:

### 1. Meta-Cognição
Antes de cada decisão importante, o Jobim reflete:
- *"Quais suposições estou fazendo?"*
- *"Considerei alternativas suficientes?"*
- *"Qual meu nível de confiança?"*

### 2. Self-Healing
Quando algo falha, tenta recuperar automaticamente:
- Simplificar o prompt
- Trocar para modelo mais rápido
- Decompor em subtarefas
- Pedir esclarecimento

### 3. Consensus Protocol
Para decisões críticas, consulta múltiplos agentes:
- Coleta opiniões
- Identifica convergências
- Sintetiza decisão final

### 4. Adaptive Learning
Aprende com a experiência:
- Lembra padrões de sucesso/falha
- Ajusta abordagem ao longo do tempo
- Otimiza prompts baseado em histórico

### 5. Explainability
Transparência total:
- Documenta cada decisão
- Explica o "porquê"
- Mantém trail auditável

## Exemplo de Uso

```
Você: /jobim new "API para gerenciamento de tarefas"

🎹 Jobim: Entendido! Vou orquestrar o desenvolvimento de uma API
para gerenciamento de tarefas.

**Fase 1: Discovery**
Delegando para Scout pesquisar...

[Scout executa pesquisa de mercado e tecnologias]

🔍 Scout Report:
- Competidores: Todoist API, Asana API, ClickUp API
- Stack recomendada: Node.js + Express + PostgreSQL
- Diferencial sugerido: Foco em integrações
- Riscos: Competição acirrada

🎹 Jobim: Discovery concluído!

**Checkpoint:** Posso prosseguir para Prototype?

Você: sim

🎹 Jobim: Delegando para Builder criar MVP...

[Builder implementa estrutura básica, modelos, rotas]

🏗️ Builder Output:
- Estrutura criada em /src
- Modelos: User, Task, Project
- Rotas: CRUD completo
- Autenticação: JWT implementado

🎹 Jobim: Prototype pronto!

**Checkpoint:** Posso prosseguir para Production?

[...continua até Launch]
```

## Dicas de Uso

### Seja Específico
```
❌ "Crie um app"
✅ "Crie um app mobile de lista de compras com compartilhamento em tempo real"
```

### Use Checkpoints
O Jobim pausa em pontos críticos. Aproveite para:
- Revisar o trabalho feito
- Dar feedback
- Ajustar direção

### Chame Agentes Diretamente
Para tarefas específicas, chame o agente apropriado:
```
/jobim agent tester "Revise a função calculateTotal em src/utils.ts"
```

### Consulte o Status
```
/jobim status
```
Mostra fase atual, artefatos gerados e próximos passos.

## Troubleshooting

### "Agente não respondeu"
- Verifique se o modelo está disponível
- Tente simplificar a tarefa
- Use `/jobim agent [agente] [tarefa mais simples]`

### "Resultado não é o esperado"
- Seja mais específico no prompt
- Forneça exemplos do que você quer
- Use `/jobim explain` para entender o raciocínio

### "Quero voltar atrás"
- Use `/jobim run [fase-anterior]` para re-executar uma fase
- O Jobim mantém histórico em `.jobim/`

## Roadmap

- [ ] CLI standalone (`pip install jobim`)
- [ ] Interface web para visualização do pipeline
- [ ] Mais agentes especializados (Designer, DBA, etc.)
- [ ] Integrações com GitHub, Jira, Slack
- [ ] Modo colaborativo (múltiplos humanos + Jobim)

## Filosofia

> *"A simplicidade é a sofisticação máxima"*

O Jobim segue a filosofia da Bossa Nova de Tom Jobim:
- **Simplicidade** — Soluções elegantes, não complicadas
- **Harmonia** — Agentes trabalhando em conjunto
- **Ritmo** — Fluxo constante do conceito ao lançamento
- **Improviso** — Adaptação inteligente a cada situação

---

<div align="center">
  <p>
    <sub>🎹 Jobim — Orquestrando o futuro do desenvolvimento de software</sub>
  </p>
</div>
