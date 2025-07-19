# Pyramid Shell

Aplicação de linha de comando para desenhar pirâmides personalizadas em Node.js usando TypeScript, seguindo princípios de Clean Architecture e Clean Code.

## Funcionalidades

- Desenha pirâmides com altura e caractere definidos pelo usuário.
- Permite exibir 1, 2 ou 3 pirâmides na mesma linha.
- Suporta orientação normal ou invertida (de ponta cabeça).
- Quando múltiplas pirâmides são exibidas, a primeira é invisível para simular espaçamento.
- Exibe o total de linhas desenhadas de todas as pirâmides criadas na sessão.

## Tecnologias

- Node.js
- TypeScript
- Clean Architecture
- Jest para testes

## Estrutura do projeto

```

pyramid-shell/
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
npm install
```

2. Execute em modo desenvolvimento:

```bash
npm run dev
```

3. Execute build e rode:

```bash
npm run build
node dist/main.js
```

4. Execute testes:

```bash
npm test
```
