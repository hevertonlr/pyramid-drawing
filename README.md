# Pyramid Drawing

Aplicação de linha de comando para desenhar pirâmides personalizadas em Node.js usando TypeScript.

## Funcionalidades

- Desenha pirâmides com altura e caractere definidos pelo usuário.
- Permite exibir 1, 2 ou 3 pirâmides na mesma linha.
- Suporta orientação normal ou invertida (de ponta cabeça).
- Quando múltiplas pirâmides são exibidas, a primeira é invisível para simular espaçamento.
- Exibe o total de linhas desenhadas de todas as pirâmides criadas na sessão.

## Tecnologias

- Node.js
- TypeScript
- pnpm
- Jest para testes

## Estrutura do projeto

```
pyramid-drawing/
├── src/
│   ├── core/
│   ├── application/
│   ├── infrastructure/
│   └── shared/
├── tests/
├── docs/
├── package.json
├── tsconfig.json
└── README.md
```

## Como rodar

1. Instale dependências:

```bash
pnpm install
```

2. Execute em modo desenvolvimento:

```bash
pnpm run dev
```

3. Execute build e rode:

```bash
pnpm run build
pnpm start
```

4. Execute testes:

```bash
pnpm test
pnpm run test:coverage
```
