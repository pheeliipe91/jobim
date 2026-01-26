# Jobim 2.0 PRD Loop System

> Integrado com Ralph Pattern para execucao autonoma de PRDs

## Visao Geral

O sistema de PRD Loop permite que o Jobim 2.0 trabalhe de forma autonoma em user stories, executando iteracoes ate completar todas as tarefas definidas em um PRD.

## Como Funciona

```
+-------------------------------------------------------------+
|                    JOBIM 2.0 PRD LOOP                        |
+-------------------------------------------------------------+
|                                                              |
|  1. Criar prd.json com user stories                         |
|     -> Define features estruturadas                         |
|                                                              |
|  2. ./jobim-loop.sh                                         |
|     -> Executa loop autonomo:                               |
|         +-------------------------------------------+        |
|         |  Para cada iteracao:                      |        |
|         |  1. Le prd-loop/prd.json                  |        |
|         |  2. Le prd-loop/progress.txt              |        |
|         |  3. Pega story com maior prioridade       |        |
|         |     onde passes: false                    |        |
|         |  4. Implementa a feature                  |        |
|         |  5. Valida (lint, tests)                  |        |
|         |  6. Se passou: commit + update prd.json   |        |
|         |  7. Append progress.txt                   |        |
|         |  8. Se todas passes: true -> COMPLETE     |        |
|         +-------------------------------------------+        |
|                                                              |
|  3. ./jobim-loop.sh 5                                       |
|     -> Limita a 5 iteracoes                                 |
|                                                              |
+-------------------------------------------------------------+
```

## Estrutura de Arquivos

```
prd-loop/
+-- README.md           # Este arquivo
+-- prompt.md           # Instrucoes para cada iteracao
+-- jobim-loop.sh       # Script bash para execucao autonoma
+-- prd.json.example    # Exemplo de formato PRD
+-- prd.json            # PRD ativo (criado pelo usuario)
+-- progress.txt        # Log de progresso (append-only)
+-- archive/            # PRDs anteriores arquivados
    +-- YYYY-MM-DD-feature-name/
        +-- prd.json
        +-- progress.txt
```

## Formato do PRD (prd.json)

```json
{
  "project": "Jobim2",
  "branchName": "jobim/feature-name",
  "description": "Descricao da feature",
  "userStories": [
    {
      "id": "US-001",
      "title": "Titulo da story",
      "description": "As a [user], I want [feature] so that [benefit]",
      "acceptanceCriteria": [
        "Criterio verificavel 1",
        "Criterio verificavel 2",
        "Tests passam"
      ],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

## Regras de Tamanho de Stories

**Cada story deve ser completavel em UMA iteracao (um context window).**

### Stories corretas (pequenas):
- Adicionar novo comando
- Melhorar resposta existente
- Adicionar validacao
- Implementar handler

### Stories muito grandes (dividir):
- "Criar sistema completo" -> dividir em 5-6 stories
- "Adicionar 10 funcionalidades" -> dividir por funcionalidade
- "Reescrever core" -> dividir por modulo

## Ordem de Dependencias

Stories devem ser ordenadas por dependencia:

1. Infraestrutura/Config
2. Core logic
3. Commands/Handlers
4. UI/Output
5. Integration

## Criterios de Aceitacao

Cada story DEVE incluir criterios verificaveis:

**Bons criterios:**
- "Comando retorna resposta formatada"
- "Handler processa input corretamente"
- "Tests passam"

**Criterios ruins (evitar):**
- "Funciona bem"
- "Boa experiencia"
- "Intuitivo"

## Progress Log

O `progress.txt` acumula conhecimento entre iteracoes:

```markdown
## Codebase Patterns
- Usar formato especifico para comandos
- Validar input antes de processar
- Logar todas interacoes

## [Data/Hora] - US-001
- O que foi implementado
- Arquivos alterados
- Learnings para futuras iteracoes
---
```

## Stop Conditions

O loop para quando:
1. Todas stories tem `passes: true`
2. Atingiu maximo de iteracoes
3. Erro critico detectado

## Filosofia

> "Each iteration: fresh context, one story, quality checks."
> - Ralph Pattern
