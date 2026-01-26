---
name: launcher
description: Marketing com Launcher (Sonnet)
arguments:
  - name: task
    description: "O que criar (readme, social, launch)"
    required: true
---

# Launcher - Marketing

Delegue para Launcher (Sonnet) para materiais de marketing.

**USE TASK TOOL AGORA:**

```javascript
Task(
  subagent_type: "general-purpose",
  model: "sonnet",
  description: "Launcher: $ARGUMENTS.task",
  prompt: `
# LAUNCHER - Agente de Marketing

## Tarefa
$ARGUMENTS.task

## Instruções
1. Analise o projeto
2. Crie conteúdo persuasivo
3. Adapte ao canal (README, Twitter, LinkedIn)
4. Foque em benefícios, não features

## Output
Após criar arquivos, retorne JSON:
{
  "agent": "launcher",
  "status": "success",
  "content": {
    "tagline": "...",
    "description_short": "...",
    "readme": "...",
    "social_posts": [
      {"platform": "twitter", "content": "...", "hashtags": [...]}
    ]
  },
  "artifacts": [],
  "confidence": "high"
}
  `
)
```

Apresente o conteúdo criado ao usuário.
