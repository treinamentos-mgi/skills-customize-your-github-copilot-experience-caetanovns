from fastapi import FastAPI, HTTPException, Response, status
from pydantic import BaseModel

app = FastAPI(title="Task API")

tasks = [
    {"id": 1, "title": "Plan the API", "completed": False},
    {"id": 2, "title": "Write documentation", "completed": True},
]


class TaskInput(BaseModel):
    title: str
    completed: bool = False


@app.get("/tasks")
def list_tasks():
    # TODO: Return all tasks.
    pass


@app.post("/tasks", status_code=status.HTTP_201_CREATED)
def create_task(task: TaskInput):
    # TODO: Assign a unique ID, store the task, and return it.
    pass


@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    # TODO: Return the matching task or raise HTTPException with a 404 status.
    pass


@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated_task: TaskInput):
    # TODO: Update the matching task or raise HTTPException with a 404 status.
    pass


@app.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int) -> Response:
    # TODO: Delete the matching task or raise HTTPException with a 404 status.
    return Response(status_code=status.HTTP_204_NO_CONTENT)