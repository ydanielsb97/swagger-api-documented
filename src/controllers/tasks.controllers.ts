import { Request, Response } from "express";
import { getConnection, getRepository, Repository } from "typeorm";
import { uuid } from 'uuidv4'
import { Task } from "../database/entities/task.entity";
// import { find } from '../database';

class TaskController {

    async getTasks(req: Request, res: Response) {

        try {

            const tasks = await Task.find();
            return res.json(tasks);

        } catch (error) {
            res.json({ error })
        }
    }

    async addTask(req: Request, res: Response) {

        try {
            const { title, description } = req.body;

            if (!title || !description) return res.json({ message: "All fields are required" });

            const taskExists = await Task.findOne({ title });

            if (taskExists) return res.json({ error: "Task already exists" });

            const model = Task.create({ title, description });

            const saved = await model.save();

            return res.json({
                message: "Task added successfuly",
                saved
            })

        } catch (error) {
            res.json({ error })
        }

    }

    async updateTask(req: Request, res: Response) {

        try {
            const { id } = req.params;

            const newTask = req.body;

            let task = await Task.findOne(id);

            if (!task) return res.json({ message: "Task not found" });

            task = { ...task, ...newTask };

            //@ts-ignore
            await Task.save(task);

            return res.json({
                message: "Task Updated"
            })
        } catch (error) {
            res.json({ error })
        }


    }

    async deleteTask(req: Request, res: Response) {

        try {
            const { id } = req.params;

            await Task.delete(id);
    
            return res.json({
                message: "Task deleted"
            });
            
        } catch (error) {
            res.json({ error })
        }

    }

}


export default new TaskController();