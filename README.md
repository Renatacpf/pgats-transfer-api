
# PGATS Transfer API

API REST e GraphQL para gerenciamento de usuários e transferências, com autenticação JWT, documentação Swagger, testes automatizados e CI.

## Endpoints REST
- `/auth/login` - Autenticação (JWT)
- `/users` - Listar/criar usuários
- `/transfers` - Listar/criar transferências
- Autenticação via header `Authorization: Bearer <token>`

## GraphQL
- Endpoint: `/graphql` (porta 4020)
- Queries: `users`, `user(id)`, `transfers`, `transfersByUser(userId)`
- Mutations: `createUser`, `createTransfer`
- Autenticação via header `Authorization: Bearer <token>`

## Documentação Swagger
- Acesse em: `http://localhost:4010/docs`

## Testes
- Execute todos os testes: `npm test`
- Relatório Allure: `npm run allure:generate` e `npm run allure:open`

## CI
- Pipeline GitHub Actions já configurado em `.github/workflows/ci.yml`

## Como rodar
1. Instale dependências: `npm install`
2. Inicie REST: `npm start`
3. Inicie GraphQL: `node src/graphql/server.js`
4. Execute testes: `npm test`

## Estrutura
- `src/routes` - Rotas REST
- `src/controller` - Controllers REST
- `src/service` - Lógica de negócio
- `src/model` - Modelos
- `src/middleware` - Middlewares REST
- `src/docs` - Swagger
- `src/graphql` - Toda configuração GraphQL
- `test` - Testes automatizados
