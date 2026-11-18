from pathlib import Path

from fastapi import FastAPI, HTTPException, Response, status
from fastapi.staticfiles import StaticFiles
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
    return tasks


@app.post("/tasks", status_code=status.HTTP_201_CREATED)
def create_task(task: TaskInput):
    next_id = max((item["id"] for item in tasks), default=0) + 1
    new_task = {"id": next_id, **task.model_dump()}
    tasks.append(new_task)
    return new_task


@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated_task: TaskInput):
    task = next((item for item in tasks if item["id"] == task_id), None)
    if task is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")

    task.update(updated_task.model_dump())
    return task


@app.delete("/tasks/{task_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_task(task_id: int) -> Response:
    task_index = next(
        (index for index, item in enumerate(tasks) if item["id"] == task_id),
        None,
    )
    if task_index is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Task not found")

    tasks.pop(task_index)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


app.mount(
    "/",
    StaticFiles(directory=Path(__file__).parent / "static", html=True),
    name="static",
)