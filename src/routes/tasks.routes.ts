import { Router } from "express";
import TaskController from "../controllers/tasks.controllers";

const TaskRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated uuid of task
 *              title:
 *                  type: string
 *                  description: the name of task
 *              description:
 *                  type: string
 *                  description: the description of task
 *              createdAt:
 *                  type: Date
 *                  description: the date of creation
 *              updatedAt:
 *                  type: Date
 *                  description: the date of last update
 *          required:
 *              - title
 *              - description
 *          example:
 *              id: 3c6681e-035f-4bda-a8bb-75bfd334ae36
 *              title: The first task
 *              description: This is the first task
 *              createdAt: 2021-08-21T22:10:41.889Z
 *              updatedAt: 2021-08-21T22:10:41.889Z
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *   summary: Return a Tasks List
 *   tags: [Task]
 *   responses:
 *      200:
 *          description: the list of tasks
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Task'
 */
TaskRouter.get("/", TaskController.getTasks);   

/**
 * tags:
 *      name: Tasks
 *      description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  post:
 *   summary: Creae a Task
 *   tags: [Task]
 *   requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Task'
 *   responses:
 *      200:
 *          description: create a new task
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message: 
 *                              type: string
 *                          saved:
 *                              $ref: '#/components/schemas/Task'
 */
TaskRouter.post("/", TaskController.addTask);   
TaskRouter.delete("/:id", TaskController.deleteTask);   
TaskRouter.patch("/:id", TaskController.updateTask);   


export default TaskRouter;