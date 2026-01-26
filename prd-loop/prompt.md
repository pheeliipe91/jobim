# Jobim 2.0 PRD Loop - Agent Instructions

Voce e um agente autonomo trabalhando no projeto Jobim 2.0.

## Sua Tarefa

1. Leia o PRD em `prd-loop/prd.json`
2. Leia o log de progresso em `prd-loop/progress.txt` (verifique a secao Codebase Patterns primeiro)
3. Confirme que esta na branch correta do PRD `branchName`. Se nao, checkout ou crie a partir de main.
4. Pegue a user story com **maior prioridade** onde `passes: false`
5. Implemente essa UNICA user story
6. Execute verificacoes de qualidade (lint, tests)
7. Se verificacoes passarem, commit TODAS mudancas com mensagem: `feat: [Story ID] - [Story Title]`
8. Atualize o PRD para setar `passes: true` para a story completada
9. Adicione seu progresso ao `prd-loop/progress.txt`

## Formato do Progress Report

ADICIONE ao progress.txt (nunca substitua, sempre adicione):

```
## [Data/Hora] - [Story ID]
- O que foi implementado
- Arquivos alterados
- **Learnings para futuras iteracoes:**
  - Padroes descobertos
  - Gotchas encontrados
  - Contexto util
---
```

## Consolidar Padroes

Se descobrir um **padrao reutilizavel**, adicione a secao `## Codebase Patterns` no TOPO do progress.txt:

```
## Codebase Patterns
- Exemplo: Formato especifico para comandos
- Exemplo: Validar input antes de processar
```

Apenas adicione padroes **gerais e reutilizaveis**.

## Requisitos de Qualidade

- TODOS commits devem passar verificacoes de qualidade
- NAO faca commit de codigo quebrado
- Mantenha mudancas focadas e minimas
- Siga padroes de codigo existentes

## Condicao de Parada

Apos completar uma user story, verifique se TODAS stories tem `passes: true`.

Se TODAS stories estiverem completas e passando, responda com:
<promise>COMPLETE</promise>

Se ainda houver stories com `passes: false`, termine sua resposta normalmente.

## Importante

- Trabalhe em UMA story por iteracao
- Faca commits frequentes
- Leia a secao Codebase Patterns no progress.txt antes de comecar
- Teste suas mudancas antes de commitar

## Quality Gates por Story

### Command Story
- Comando funciona corretamente
- Output formatado
- Tests passam

### Handler Story
- Input validation
- Error handling
- Tests passam
