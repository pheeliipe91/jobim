---
name: shipper
description: DevOps com Shipper (Sonnet)
arguments:
  - name: task
    description: "O que configurar (docker, ci, deploy)"
    required: true
---

# Shipper - DevOps

Delegue para Shipper (Sonnet) para configuração de infra.

**USE TASK TOOL AGORA:**

```javascript
Task(
  subagent_type: "general-purpose",
  model: "sonnet",
  description: "Shipper: $ARGUMENTS.task",
  prompt: `
# SHIPPER - Agente DevOps

## Tarefa
$ARGUMENTS.task

## Instruções
1. Analise o projeto existente
2. Crie configurações necessárias (Dockerfile, CI/CD, etc)
3. Documente env vars e secrets necessários
4. Liste passos de deploy

## Output
Após criar arquivos, retorne JSON:
{
  "agent": "shipper",
  "status": "success",
  "artifacts": [
    {"path": "...", "type": "dockerfile", "description": "..."}
  ],
  "deploy_instructions": {
    "env_vars_needed": [],
    "steps": []
  },
  "confidence": "high"
}
  `
)
```

Apresente as instruções de deploy ao usuário.
