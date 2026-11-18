# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Crie uma API REST para gerenciar tarefas usando FastAPI. Você praticará rotas HTTP, validação de dados com modelos Pydantic e operações CRUD com respostas apropriadas para recursos inexistentes.

## 📝 Tasks

### 🛠️ Listar Tarefas

#### Descrição
Execute o código inicial com FastAPI e implemente uma rota para consultar todas as tarefas armazenadas em memória.

#### Requisitos
O programa completo deve:

- Criar uma aplicação FastAPI executável com `uvicorn starter-code:app --reload` (instale `fastapi` e `uvicorn` se necessário).
- Implementar `GET /tasks` para retornar a lista de tarefas.
- Permitir que a documentação interativa da API seja acessada em `/docs`.

### 🛠️ Criar Tarefas com Validação

#### Descrição
Implemente a criação de tarefas usando o modelo Pydantic fornecido. A API deve validar os dados recebidos e armazenar cada nova tarefa.

#### Requisitos
O programa completo deve:

- Implementar `POST /tasks` para receber o título e o estado de conclusão da tarefa.
- Atribuir um identificador único à nova tarefa e adicioná-la à lista.
- Retornar a tarefa criada com o status HTTP `201 Created`.
- Rejeitar dados que não correspondam ao modelo de entrada.

### 🛠️ Completar as Operações CRUD

#### Descrição
Adicione rotas para consultar, atualizar e excluir uma tarefa específica usando seu identificador.

#### Requisitos
O programa completo deve:

- Implementar `GET /tasks/{task_id}` para retornar uma tarefa existente.
- Implementar `PUT /tasks/{task_id}` para atualizar o título e o estado de conclusão.
- Implementar `DELETE /tasks/{task_id}` para excluir a tarefa e retornar o status HTTP `204 No Content`.
- Retornar o status HTTP `404 Not Found` com uma mensagem clara quando o identificador não existir.