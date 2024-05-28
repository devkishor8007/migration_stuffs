import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { Todo } from "../entity/todo.entity";
import { myDataSource } from "../config/db.source";

export const createTodo = async (req: Request, res: Response) => {
  const { title, status } = req.body;
  try {
    let todo = new Todo();
    todo.title = title;
    todo.status = status;
    todo.createdAt = new Date();
    todo.updatedAt = new Date();

    const errors = await validate(todo);
    if (errors.length > 0) {
      return res.json({
        errors,
      });
    } else {
      myDataSource.manager.save(todo);
      return res.send(todo);
    }
  } catch (error) {
    console.log(error);
  }
};
