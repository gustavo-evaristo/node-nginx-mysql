# Cadastro de pessoas

Este é um projeto simples que implementa uma aplicação Node.js com MySQL como banco de dados. Ao acessar a rota localhost:8080, o sistema cadastra um nome aleatório no banco de dados e lista todos os nomes já cadastrados na tela.

O projeto foi desenvolvido e configurado com Node.js, MySQL e Nginx usando Docker Compose.

# Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas antes de executar o projeto:

- Docker
- Node.js
- npm

# Configuração do Ambiente

## 1. Clone o Repositório

```bash
git clone https://github.com/gustavo-evaristo/node-nginx-mysql.git

cd node-nginx-mysql
```

## 2. Execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up
```

Isso iniciará os serviços do MySQL, Node.js e Nginx.

## 3. Acessando a aplicação.

Acesse a aplicação pela http://localhost:8080

A cada acesso, a aplicação cadastrará automaticamente um nome aleatório no banco de dados e exibirá a lista de todos os nomes cadastrados.

## 4. Encerrando a aplicação

Para encerrar os serviços, execute:

```bash
docker-compose down
```

Isso encerrará todos os containers do Docker associados ao projeto.
