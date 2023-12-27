# Course-project

## 💻 Projeto
 Um projeto que simula uma platafoma de cursos online, onde é possivel realizar cadastro e login, filtar cursos pela barra de pesquisa e por categoria, acesar o curso e suas aulas. Desenvolvido de forma FullStack, o projeto abrange o repositório do front-end, acessível ao clicar [aqui](https://github.com/vitorbelarmino/course-project-app).
</br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  **[Node.js](https://nodejs.org/en/)**
-  **[Express](https://expressjs.com/pt-br/)**
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[PostgresSQL](https://www.postgresql.org/)**
-  **[Prisma](https://www.prisma.io/)**
-  **[Docker](https://www.docker.com/)**
-  **[Joi](https://joi.dev/api/?v=17.9.1)**
-  **[JWT](https://jwt.io/libraries)**
-  **[DotENV](https://github.com/motdotla/dotenv)**
-  **[Eslint](https://eslint.org/)**
  
</br>

## 📌 Implementações
- Cadastro: Permite a criação de um usuário, gerando um token que será utilizado para autenticar o usuário no frontend.
- Login: Realiza a validação das credenciais do usuário, retornando um token que será empregado para efetuar o login no frontend.
- Bcrypt: Utilizado para cifrar a senha do usuário antes de armazená-la no banco de dados, garantindo segurança. Também descriptografa a senha durante a validação das credenciais no momento do login.
- JWT (JSON Web Tokens): Empregado na geração e validação de tokens, assegurando a proteção das informações do usuário. Os tokens são essenciais para a autenticação e autorização em todo o sistema.
- Joi: Utilizado para verificar e validar os campos recebidos, garantindo que as informações fornecidas atendam aos requisitos necessários.

## ⬇️ Como executar o projeto

```bash

# Clone este repositório
$ git clone git@github.com:vitorbelarmino/course-project-service.git

# Acesse a pasta do projeto no terminal/cmd
$ cd course-project-service

# Instale as dependências
$ npm install

# renomeie o arquivo .env.example para .env

# Suba o banco de dados com Docker
$ npm run db:up

# rode as migration
$ npx prisma migrate dev

# execute os seeds
$ npx prisma db seed

# Execute a aplicação
$ npm run dev

# O App inciará na porta:3333 - acesse http://localhost:3333
```
  
> Github: https://github.com/vitorbelarmino

> Linkedin: https://www.linkedin.com/in/vitor-belarmino/

> Email: vitor.belarmino@hotmail.com
