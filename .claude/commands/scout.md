---
name: scout
description: Pesquisa rápida com Scout (Haiku)
arguments:
  - name: task
    description: "O que pesquisar"
    required: true
---

# Scout - Pesquisa Rápida

Delegue para Scout (Haiku) para pesquisa rápida.

**USE TASK TOOL AGORA:**

```javascript
Task(
  subagent_type: "general-purpose",
  model: "haiku",
  description: "Scout: $ARGUMENTS.task",
  prompt: `
# SCOUT - Agente de Pesquisa

## Tarefa
$ARGUMENTS.task

## Instruções
1. Use WebSearch para pesquisar
2. Analise os resultados
3. Sintetize as descobertas

## Output
Retorne JSON:
{
  "agent": "scout",
  "status": "success",
  "report": {
    "summary": "Resumo em 2-3 frases",
    "findings": ["descoberta 1", "descoberta 2"],
    "recommendations": ["recomendação 1"],
    "sources": ["url1", "url2"]
  },
  "confidence": "high"
}
  `
)
```

Após receber o resultado, apresente de forma clara ao usuário.
