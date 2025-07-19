# Arquitetura - Pyramid Drawing

Este projeto segue a arquitetura limpa (Clean Architecture) dividida em camadas:

## Camadas

### Core (Regra de negócio)

- `entities/`: Entidades do domínio.
- `value-objects/`: Objetos de valor imutáveis.
- `exceptions/`: Exceções específicas de domínio.

### Application (Regras de caso de uso)

- `use-cases/`: Lógica dos casos de uso (ex: criar pirâmide, calcular estatísticas).
- `dto/`: Objetos de transferência de dados.
- `interfaces/`: Portas (abstrações) para entrada, saída, repositórios, etc.

### Infrastructure (Detalhes de implementação)

- `cli/`: Entrada e saída via terminal.
- `generators/`: Implementação concreta da geração de pirâmide.
- `repositories/`: Armazenamento em memória.
- `container/`: Injeção de dependência.

### Shared

- Utilitários comuns (`utils/`, `types/`).

## Fluxo Geral

```
Usuário ↔ CLI ↔ Controller ↔ UseCases ↔ Core ↔ Output
                                ↕
                             Services
```

## Testes

Localizados em `tests/`, espelham a estrutura da `src/`. Usam `jest`.
