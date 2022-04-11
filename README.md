## 🍄 **Sobre**


Esse projeto é uma API para utilização no projeto do módulo 05 (Front-End) da Formação WebDev Full Stack da [Resilia Educação](https://www.resilia.com.br/).


---

## 🧪 **Tecnologias**

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Mongodb](https://www.mongodb.com/pt-br)
- [Yup](https://github.com/jquense/yup)
- [Swagger](https://swagger.io/)

---

## 🚀 **Demo**

- Acesse a Demo no Heroku.

- API [`<https://vila-api.herokuapp.com/>`](https://vila-api.herokuapp.com/)
- Documentação [`<https://vila-api.herokuapp.com/api-docs>`](https://vila-api.herokuapp.com/api-docs)

Arquivo com a Collection do Insomnia [.Insomnia_Collection.json](.Insomnia_Collection.json)

---

## 🎮 **Ambiente de desenvolvimento**

Para executar o ambiente de desenvolvimento deste projeto é necessário possuir o node instalado em sua máquina.

```bash
node --version
v16.0.0
```

Possuir o yarn instalado.

```bash
node --version
1.22.17
```

Para rodar o projeto é necessário rodar um banco Mongodb, sugiro o uso do docker e docker-compose. O projeto já contém um arquivo do docker-compose configurado para isso, então basta usar o seguinte comando:


```bash
docker-compose up -d
```

Ou alternativamente configurar o banco manualmente.

Usei o dotenv para variáveis de ambiente, então pode-se renomear o arquivo `.env.example` para `.env` e aproveitar as variáveis de ambiente de lá. Por padrão elas apontam para o banco PostgreSQL do docker-compose.

Crie um arquivo .env com base no arquivo [.env.example](.env.example)

O próximo passo é instalar as dependências:

---

## **🚀 Como executar**

```bash
# Instale as dependências
$ yarn

# Alternativamente instale as dependências exatas do lock file
$ yarn install --frozen-lockfile

# Gerar o prisma client com a tipagem dos models do banco de dados, para isso execute o seguinte comando
$ yarn generate

# Execute a aplicação
$ yarn dev
```

- O app estará rodando na porta 3333.
- Acesse [`<http://localhost:3333>`](http://localhost:3333)
- Documentação [`<http://localhost:3333/api-docs>`](http://localhost:3333/api-docs)

---


## ⚖️ **Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by Planegazers