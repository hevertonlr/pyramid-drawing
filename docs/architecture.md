# Documentação da Arquitetura

## Visão geral

A aplicação segue a **Clean Architecture**, separando responsabilidades em camadas:

- **Core**: entidades e regras de negócio pura.
- **Application**: casos de uso e interfaces (ports).
- **Infrastructure**: adaptadores, frameworks, implementação concreta dos ports.
- **Shared**: utilitários e tipos compartilhados.

## Fluxo da aplicação

1. O usuário interage via CLI (`ReadlineInputHandler`).
2. O `PyramidCliController` orquestra os casos de uso.
3. `CreatePyramidUseCase` gera a pirâmide usando o `PyramidGeneratorService`.
4. Resultado é salvo em `MemoryPyramidRepository`.
5. Saída formatada é exibida pelo `ConsoleOutputPresenter`.
6. `CalculateStatisticsUseCase` calcula total acumulado de linhas.

## Testes

- Utiliza Jest com testes unitários para VOs, entidades e casos de uso.
- Configuração permite uso de aliases para importação.

## Extensibilidade

- Facilidade para adicionar novas formas ou interfaces (ex: web).
- Repositórios podem ser substituídos por persistência real.
