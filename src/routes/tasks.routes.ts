import { Router } from "express";
import TaskController from "../controllers/tasks.controllers";

const TaskRouter = Router();

TaskRouter.get("/", TaskController.getTasks);   
TaskRouter.post("/", TaskController.addTask);   
TaskRouter.delete("/:id", TaskController.deleteTask);   
TaskRouter.patch("/:id", TaskController.updateTask);   


export default TaskRouter;