# 🚀 API de Usuários: Node.js + PostgreSQL + Docker

Bem-vindo ao repositório da nossa primeira API RESTful modular! Este projeto foi desenvolvido para demonstrar na prática como construir um servidor backend estruturado, conectar a um banco de dados relacional e documentar os *endpoints* de forma profissional.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** & **Express.js**: Para o servidor web e roteamento.
* **PostgreSQL**: Banco de dados relacional.
* **Docker & Docker Compose**: Para orquestração da infraestrutura (banco de dados e pgAdmin).
* **Swagger (OpenAPI)**: Para documentação interativa e testes da API.
* **pg**: Driver nativo para comunicação entre Node.js e PostgreSQL.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas na sua máquina:

1. Git
2. Node.js (Versão 18 ou superior)
3. Docker Desktop (Rodando em segundo plano)

---

## 💻 Como Rodar o Projeto Passo a Passo

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/ipolato/opt120-backend-exemplo.git
cd opt120-backend-exemplo
```

---

### Passo 2: Subir a Infraestrutura (Banco de Dados)

```bash
docker compose up -d
```

O PostgreSQL estará disponível na porta **5432**.

---

### Passo 3: Instalar as Dependências do Node.js

```bash
npm install
```

---

### Passo 4: Ligar o Servidor Backend

```bash
node --watch server.js
```

O servidor iniciará em:

```bash
http://localhost:3000
```

---

## 🧪 Como Testar a API (Swagger)

Acesse no navegador:

```
http://localhost:3000/api-docs
```

---

## 📡 Endpoints da API

### ✅ Criar Usuário (POST)

**POST /usuarios**

```json
{
  "nome": "João",
  "email": "joao@email.com"
}
```

Resposta esperada:

* **201 Created**

---

### 📋 Listar Usuários (GET)

**GET /usuarios**

Resposta:

* **200 OK**
* Lista de usuários

---

### 🔍 Buscar Usuário por ID (GET)

**GET /usuarios/{id}**

Exemplo:

```
GET /usuarios/1
```

Resposta:

* **200 OK** → usuário encontrado
* **404 Not Found** → usuário não existe

---

### ✏️ Atualizar Usuário (PUT)

**PUT /usuarios/{id}**

Atualiza os dados de um usuário existente.

#### Exemplo:

```
PUT /usuarios/1
```

```json
{
  "nome": "João Atualizado",
  "email": "joao.novo@email.com"
}
```

#### Respostas:

* **200 OK** → usuário atualizado com sucesso
* **404 Not Found** → usuário não encontrado

---

### ❌ Deletar Usuário (DELETE)

**DELETE /usuarios/{id}**

Remove um usuário do banco de dados.

#### Exemplo:

```
DELETE /usuarios/1
```

#### Respostas:

* **200 OK** → usuário removido com sucesso
* **204 No Content** → remoção sem retorno
* **404 Not Found** → usuário não encontrado

---
