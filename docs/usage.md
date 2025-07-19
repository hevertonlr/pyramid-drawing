# Guia de Uso

## Passos para execução

1. Abra o terminal na pasta do projeto.
2. Execute `npm install` para instalar as dependências.
3. Rode `npm run dev` para executar em modo de desenvolvimento.
4. Siga as perguntas no terminal:
   - Informe a altura da pirâmide (ex: 5).
   - Informe o caractere para construção (ex: `*`).
   - Informe quantas pirâmides deseja (1, 2 ou 3) (ex: 1).
   - Informe a orientação (`normal` ou `inversa`) (ex: `normal`).

## Exemplo de saída

```shell
Resultado da(s) pirâmide(s):

    *
   ***
  *****
 *******
*********

Total de linhas desenhadas: 5

Linhas acumuladas de todas as pirâmides: 5
```

## Observações

- Caso escolha mais de 1 pirâmide, a primeira ficará invisível para simular espaçamento.
- A altura deve ser um número inteiro maior que zero.
- O caractere deve ser um único caractere não vazio.
- A orientação pode ser `normal` ou `inversa`.
