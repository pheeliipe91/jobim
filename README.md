# Jobim 2.0 - Multi-Agent Orchestrator

> Intelligent orchestrator that coordinates specialized AI agents in a hierarchical layer architecture.

## Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 0: USER                                              │
│  → Provides high-level objective                            │
└─────────────────────────────┬───────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1: JOBIM (Opus) - Orchestrator                       │
│  → Plans, delegates, synthesizes, decides                   │
│  → Maintains state in .jobim/state.json                     │
│  → NEVER executes code, always delegates                    │
└───────────┬─────────┬─────────┬─────────┬─────────┬─────────┘
            ▼         ▼         ▼         ▼         ▼
┌─────────────────────────────────────────────────────────────┐
│  LAYER 2: SUBAGENTS (Haiku/Sonnet)                          │
│                                                             │
│  Scout     Builder   Tester    Designer  UXer     Shipper   │
│  (Haiku)   (Sonnet)  (Sonnet)  (Sonnet)  (Sonnet) (Sonnet)  │
│                                                             │
│  → Execute specific tasks                                   │
│  → Return structured output (JSON)                          │
│  → Report status and blockers                               │
└─────────────────────────────────────────────────────────────┘
```

## Specialized Agents

| Agent | Model | Specialty |
|-------|-------|-----------|
| **Jobim** | Opus | Orchestration, strategy, synthesis |
| **Scout** | Haiku | Quick research, market analysis, feasibility |
| **Builder** | Sonnet | Code, architecture, elite frontend implementation |
| **Tester** | Sonnet | Code review, tests, security (OWASP) |
| **Designer** | Sonnet | UI, design tokens, visual systems |
| **UXer** | Sonnet | Flows, usability, Nielsen heuristics |
| **Shipper** | Sonnet | Docker, CI/CD, deploy |
| **Launcher** | Sonnet | README, marketing, launch |

## Development Pipeline

```
Discovery → Prototype → Production → Ship → Launch
   │            │            │          │        │
   ▼            ▼            ▼          ▼        ▼
 Scout      Builder    Builder+     Shipper  Launcher
                        Tester
```

### Phases

1. **Discovery** - Scout analyzes market, competitors and technical feasibility
2. **Prototype** - Builder creates functional MVP
3. **Production** - Builder refactors + Tester reviews in parallel
4. **Design** (optional) - Designer + UXer improve the experience
5. **Ship** - Shipper configures Docker, CI/CD, deploy
6. **Launch** - Launcher creates README, social posts, marketing materials

## Installation

### 1. Copy to your project or global

```bash
# For global use
cp -r .claude ~/.claude

# Or for a specific project
cp -r .claude /your/project/.claude
```

### 2. Restart Claude Code

Claude Code will automatically detect the new commands.

## Usage

### Autonomous Mode (default)

```bash
/jobim new "Create a task management SaaS with authentication and dashboard"
```

Jobim executes the complete pipeline, stopping only when necessary.

### Interactive Mode

```bash
/jobim new "Project description" interactive
```

Pauses after each phase for approval.

### Status Commands

```bash
/jobim status    # View current state
/jobim run design   # Execute specific phase
/jobim reset     # Clear and restart
```

### Individual Agents

```bash
/scout "Research design system trends 2026"
/builder "Create responsive landing page with animations"
/designer "Create design system for meditation app"
/uxer "Analyze onboarding flow"
/tester "Review authentication module code"
/shipper "Configure Docker and CI/CD for Next.js"
/launcher "Create README and posts for Product Hunt"
```

## What's New in 2.0

### Builder v2.0 - Elite Frontend Developer

- **2026 Standards**: Bento grids, glass morphism, gradient mesh
- **Advanced animations**: Framer Motion, GSAP, Lenis smooth scroll
- **Accessibility**: WCAG 2.1 AA, prefers-reduced-motion
- **Performance**: Optimized Core Web Vitals

### Designer v2.0 - Design System Expert

- **Design Tokens in JSON**: HSL colors, typography, spacing, shadows
- **Visual Hierarchy**: Detailed specification per section
- **Components**: Complete states (hover, focus, active, disabled)
- **2026 Trends**: Documented and applied

### UXer v2.0 - Nielsen Norman Consultant

- **Laws of UX**: Hick, Fitts, Jakob, Miller, Tesler applied
- **Heuristic Analysis**: 10 Nielsen heuristics with score
- **Friction Taxonomy**: Cognitive, visual, motor, temporal, trust
- **Prioritization**: P0/P1/P2 with effort vs impact

## Project State

Jobim maintains state in `.jobim/state.json`:

```json
{
  "version": "2.0",
  "project": { "name": "", "description": "" },
  "phase": {
    "current": "discovery",
    "completed": [],
    "history": []
  },
  "context": {
    "discovery": null,
    "prototype": null,
    "production": null,
    "ship": null,
    "launch": null
  },
  "decisions": [],
  "artifacts": []
}
```

## Principles

1. **Never execute, always delegate** - Jobim orchestrates, doesn't implement
2. **Context is king** - Pass complete context to subagents
3. **Persistent state** - Everything documented in state.json
4. **Structured output** - Subagents return parseable JSON
5. **Momentum over perfection** - Move forward and iterate > get stuck seeking perfection

## File Structure

```
.claude/
├── commands/           # Slash commands (/jobim, /scout, etc.)
│   ├── jobim.md       # Main orchestrator
│   ├── scout.md       # Quick research
│   ├── builder.md     # Elite development
│   ├── designer.md    # Design systems
│   ├── uxer.md        # UX analysis
│   ├── tester.md      # QA and security
│   ├── shipper.md     # DevOps
│   └── launcher.md    # Marketing
└── agents/            # Agent definitions
    ├── jobim.md
    ├── scout.md
    ├── builder.md
    ├── designer.md
    ├── uxer.md
    ├── tester.md
    ├── shipper.md
    └── launcher.md
```

## External References & Best Practices

Jobim follows excellence standards based on:

### Anthropic Resources
- **[Engineering at Anthropic](https://www.anthropic.com/engineering)** - Reliable AI systems design
- **[Claude Code](https://github.com/anthropics/claude-code)** - Agentic coding patterns
- **[Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)** - Recipes for Claude usage

### Multi-Agent Patterns Applied

| Pattern | Description | Used in Jobim |
|---------|-------------|---------------|
| **Supervisor** | Central coordinator | Jobim (Opus) |
| **Chain** | Sequential processing | Discovery → Prototype → Production |
| **Parallel Analysis** | Concurrent specialists | Builder + Tester |
| **Contract-based** | Structured JSON outputs | All subagents |
| **Quality Gates** | Phase validation | Each phase transition |

### Claude Code Patterns

```
┌────────────────────────────────────────────────────────────┐
│  LAYER HIERARCHY                                           │
├────────────────────────────────────────────────────────────┤
│  LAYER 0 │ User (high-level objective)                     │
│  LAYER 1 │ Jobim/Opus (orchestrates, never executes)       │
│  LAYER 2 │ Subagents/Haiku+Sonnet (execute tasks)          │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  MODEL PER TASK                                            │
│                                                            │
│  Scout (Haiku)     → Quick research, low cost              │
│  Builder (Sonnet)  → Implementation, code                  │
│  Tester (Sonnet)   → Review, validation                    │
│  Jobim (Opus)      → Strategy, synthesis, decisions        │
└────────────────────────────────────────────────────────────┘
```

### State Machine Pattern

```
Discovery ──► Prototype ──► Production ──► Ship ──► Launch
    │             │             │           │          │
    ▼             ▼             ▼           ▼          ▼
 .jobim/      .jobim/       .jobim/     .jobim/    .jobim/
 state.json   state.json    state.json  state.json state.json
```

### Memory Patterns

**Short-term (Session)**:
- `.jobim/state.json` - Current project state

**Long-term (Project)**:
- `context` per phase - Accumulated outputs
- `decisions` - Decision history
- `artifacts` - Generated artifacts

### External Resources

- **Anthropic Engineering**: https://www.anthropic.com/engineering
- **Claude Code**: https://github.com/anthropics/claude-code
- **AI Agents Topic**: https://github.com/topics/ai-agents
- **LangGraph Patterns**: https://github.com/langchain-ai/langgraph

---

## Contributing

Pull requests are welcome! For significant changes, please open an issue first.

## License

MIT

---

**Version:** 2.1.0
**Updated:** 2026-01-26

*Inspired by Tom Jobim's Bossa Nova philosophy: simplicity, harmony, rhythm, and intelligent adaptation.*
