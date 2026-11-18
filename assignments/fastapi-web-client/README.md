# 📘 Assignment: Building a Web Client for a REST API

## 🎯 Objective

Crie uma interface web que consome uma API REST com JavaScript e a Fetch API nativa do navegador. Você praticará requisições HTTP, envio e leitura de JSON, atualização da interface e tratamento de erros sem bibliotecas JavaScript externas.

## 📝 Tasks

### 🛠️ Carregar e Exibir Tarefas

#### Descrição
Complete o cliente para buscar as tarefas da API FastAPI e exibi-las na página. O starter inclui a interface e um servidor funcional que entrega a página e a API na mesma origem.

#### Requisitos
O programa completo deve:

- Iniciar o servidor com `uvicorn starter-code:app --reload` (instale `fastapi` e `uvicorn` caso ainda não estejam disponíveis).
- Fazer uma requisição `GET /tasks` quando a página abrir.
- Exibir o título e o estado de conclusão de cada tarefa.
- Mostrar estados de carregamento, lista vazia e erro de conexão.

### 🛠️ Criar Tarefas pela Interface

#### Descrição
Conecte o formulário da página à rota de criação da API e atualize a lista quando uma tarefa for adicionada.

#### Requisitos
O programa completo deve:

- Recusar títulos vazios ou compostos apenas por espaços.
- Enviar uma requisição `POST /tasks` com o título em JSON e `completed` definido como `false`.
- Limpar o formulário e atualizar a lista após a criação bem-sucedida, sem recarregar a página.
- Informar o usuário se a API retornar um erro.

### 🛠️ Atualizar e Excluir Tarefas

#### Descrição
Implemente as ações dos botões de cada tarefa para alterar seu estado de conclusão ou removê-la.

#### Requisitos
O programa completo deve:

- Enviar `PUT /tasks/{task_id}` com o título e o novo estado de conclusão ao marcar ou reabrir uma tarefa.
- Enviar `DELETE /tasks/{task_id}` ao excluir uma tarefa.
- Atualizar a interface após cada operação sem recarregar a página.
- Exibir erros retornados pela API sem interromper o funcionamento da interface.