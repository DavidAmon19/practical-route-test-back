<h1 align="center">:file_cabinet: Teste de rotas com Google API (Back-End)</h1>

## :memo: Descrição
O projeto consiste em marcar o mapa de acordo com a escolha do usuario, com buscas, pontos de interesse e traçar rotas do ponto A ao B.
## :books: Funcionalidades
* <b>Busca</b>: Busca endereço e marca no mapa, ao clicar é passado todas as informações pertinentes a este endereço
* <b>POI</b>: Marcação de ponto de interesse, o usuario digita o ponto, descreve o interesse e fica salvo na marcação
* <b>Rotas</b>: Existem dois campos para marcar o ponto de origem e destino e um botão para traçar a rota entre eles

## :wrench: Tecnologias utilizadas
* Node;
* Prisma;
* PostgreSQL;
* Express;
* Typescript;

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
npm ou yarn install

```
Para rodar a migration é necessário rodar o seguinte comando:
Obs: Foi enviado um backup do banco de dados via email.

```
npx prisma migrate dev --name init

```

Para rodar o projeto é necessário utilizar o seguinte comando abaixo:

```
npm ou yarn dev

```