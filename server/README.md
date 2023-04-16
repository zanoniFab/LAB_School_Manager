# Servidor de exemplo do projeto React do módulo 02

## Projeto React criado utilizando [Json Server](https://github.com/typicode/json-server) e [Json Server Auth](https://github.com/jeremyben/json-server-auth)

## Primeiros passos

Realize o fork do projeto

<img width="301" alt="image" src="https://user-images.githubusercontent.com/66982809/227803405-2e4e85a4-4e4a-495f-ba03-3db88a91d04d.png">

Para clonar o repositório é preciso executar o comando

```
// git clone + caminho do repositório no github.
git clone git@github.com:Devin-ilog/m02-projeto-integrado-react.git
```

Para instalar as dependencias é preciso executar o comando **npm install**:

```
// Acessar a pasta do projeto
cd m02-projeto-integrado-react

// Instalar as dependencias do projeto
npm install
```

---

## Comandos

No diretório do projeto, você pode executar:

### **dev**

Executa o aplicativo.

```
npm run dev
```

O servidor roda a partir da **porta 8081**

---

## Endpoints disponiveis

### Criar um usuário:

```
URL: http://localhost:8081/register
Método: POST
Headers: {
    "Content-Type": "application/json"
}
Body: {
    "name": "Pedagoga teste",
    "phone": "(99) 99999-9999",
    "birthdate": "01/01/1990",
    "cpf": "999.999.999-99",
    "email": "usuario@teste.com.br",
    "password": "senha-usuario"
}
```

**Resultado:**

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9AdGVzdGUuY29tLmJyIiwiaWF0IjoxNjc5ODYxNjYzLCJleHAiOjE2Nzk4NjUyNjMsInN1YiI6IjIifQ.Bibd_481xRbdx3pkaxQsmfvdo8fsZyzyovxnv0bdJ-g",
    "user": {
        "email": "usuario@teste.com.br",
        "name": "Pedagoga teste",
        "phone": "(99) 99999-9999",
        "birthdate": "01/01/1990",
        "cpf": "999.999.999-99",
        "id": 2
    }
}
```

### Efetuar login:

```
URL: http://localhost:8081/login
Método: POST
Headers: {
    "Content-Type": "application/json"
}
Body: {
    "email": "usuario@teste.com.br",
    "password": "senha-usuario"
}
```

**Resultado:**

```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9AdGVzdGUuY29tLmJyIiwiaWF0IjoxNjc5ODYxNzYzLCJleHAiOjE2Nzk4NjUzNjMsInN1YiI6IjIifQ.Bo_Ng0_yQGr3YYh4zdfU7UqE4qjjOEDZKbG3XMxzK5Q",
    "user": {
        "email": "usuario@teste.com.br",
        "name": "Pedagoga teste",
        "phone": "(99) 99999-9999",
        "birthdate": "01/01/1990",
        "cpf": "999.999.999-99",
        "id": 2
    }
}
```

### Listar usuários/pedagogos:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/users
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
[
    {
        "email": "usuario@teste.com.br",
        "password": "$2a$10$BmakfCEiDXPHjpAY.oriKOnm0.qmRYYW3Ny1a4FqdvLfzvk4Vj0qm",
        "name": "Pedagoga teste",
        "phone": "(99) 99999-9999",
        "birthdate": "01/01/1990",
        "cpf": "999.999.999-99",
        "id": 2
    }
]
```

### Listar alunos:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/students
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
[
    {
        "name": "Teste aluno",
        "phone": "(99) 99999-9999",
        "birthdate": "01/01/1990",
        "cpf": "999.999.999-99",
        "grade": 80,
        "id": 3
    }
]
```

### Cadastrar alunos:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/students
Método: POST
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
Body: {
    "name": "Teste aluno",
    "phone": "(99) 99999-9999",
    "birthdate": "01/01/1990",
    "cpf": "999.999.999-99",
    "grade": 80
}
```

**Resultado:**

```
{
    "name": "Teste aluno",
    "phone": "(99) 99999-9999",
    "birthdate": "01/01/1990",
    "cpf": "999.999.999-99",
    "grade": 80,
    "id": 3
}
```

### Listar todos os Acompanhamentos pedagógicos exibindo detalhes do usuário e aluno:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/accompaniments?_expand=user&_expand=student
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
[
    {
        "studentId": 3,
        "userId": 2,
        "date": "27/03/2023",
        "title": "Acompanhamento teste",
        "description": "Descrição do acompanhamento",
        "finished": false,
        "id": 1,
        "user": {
            "email": "usuario@teste.com.br",
            "password": "$2a$10$BmakfCEiDXPHjpAY.oriKOnm0.qmRYYW3Ny1a4FqdvLfzvk4Vj0qm",
            "name": "Pedagoga teste",
            "phone": "(99) 99999-9999",
            "birthdate": "01/01/1990",
            "cpf": "999.999.999-99",
            "id": 2
        },
        "student": {
            "name": "Teste aluno",
            "phone": "(99) 99999-9999",
            "birthdate": "01/01/1990",
            "cpf": "999.999.999-99",
            "grade": 80,
            "id": 3
        }
    }
]
```

### Listar todos os Acompanhamentos pedagógicos sem exibir detalhes do usuário e aluno:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/accompaniments
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
[
    {
        "studentId": 3,
        "userId": 2,
        "date": "27/03/2023",
        "title": "Acompanhamento teste",
        "description": "Descrição do acompanhamento",
        "finished": false,
        "id": 1
    }
]
```

### Listar os Acompanhamentos pedagógicos em aberto de um único usuário:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.
Alterar o número para o id do usuário desejado `userId=2`.
Se não quiser exibir as informações detalhadas do usuário e do aluno basta remover `&_expand=user&_expand=student` da URL.

```
URL: http://localhost:8081/accompaniments?finished=false&userId=2&_expand=user&_expand=student
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
[
    {
        "studentId": 3,
        "userId": 2,
        "date": "27/03/2023",
        "title": "Acompanhamento teste",
        "description": "Descrição do acompanhamento",
        "finished": false,
        "id": 1,
        "user": {
            "email": "usuario@teste.com.br",
            "password": "$2a$10$BmakfCEiDXPHjpAY.oriKOnm0.qmRYYW3Ny1a4FqdvLfzvk4Vj0qm",
            "name": "Pedagoga teste",
            "phone": "(99) 99999-9999",
            "birthdate": "01/01/1990",
            "cpf": "999.999.999-99",
            "id": 2
        },
        "student": {
            "name": "Teste aluno",
            "phone": "(99) 99999-9999",
            "birthdate": "01/01/1990",
            "cpf": "999.999.999-99",
            "grade": 80,
            "id": 3
        }
    }
]
```

### Obter um único acompanhamento pedagógico:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.
Alterar o número `1` para o id do acompanhamento desejado.

```
URL: http://localhost:8081/accompaniments/1
Método: GET
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
```

**Resultado:**

```
{
    "id": 1,
    "studentId": 3,
    "userId": 2,
    "date": "27/03/2023",
    "title": "Acompanhamento teste",
    "description": "Descrição do acompanhamento",
    "finished": false
}
```

### Cadastrar acompanhamentos pedagógicos:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/accompaniments
Método: POST
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
Body: {
    "studentId": 3,
    "userId": 2,
    "date": "27/03/2023",
    "title": "Acompanhamento teste",
    "description": "Descrição do acompanhamento",
    "finished": false
}
```

**Resultado:**

```
{
    "studentId": 3,
    "userId": 2,
    "date": "27/03/2023",
    "title": "Acompanhamento teste",
    "description": "Descrição do acompanhamento",
    "finished": false,
    "id": 1
}
```

### Editar acompanhamentos pedagógicos:

Endpoint autenticado, é necessário adicionar no Authorization o accessToken retornado pelo login.

```
URL: http://localhost:8081/accompaniments/1
Método: PUT
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer accessToken"
}
Body: {
    "id": 1,
    "studentId": 3,
    "userId": 2,
    "date": "27/03/2023",
    "title": "Acompanhamento teste",
    "description": "Descrição do acompanhamento",
    "finished": true
}
```

**Resultado:**

```
{
    "id": 1,
    "studentId": 3,
    "userId": 2,
    "date": "27/03/2023",
    "title": "Acompanhamento teste",
    "description": "Descrição do acompanhamento",
    "finished": true
}
```
