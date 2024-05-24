import { Request, Response, NextFunction } from "express";
import { myDataSource } from "../config/db.source";
import { User } from "../entity/user.entity";
import { validate } from "class-validator";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await myDataSource.getRepository(User).find();
    if (!users) {
      res.status(200).json({ message: "list of users", users });
    }
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: Request, res: Response) => {};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  let user = new User();
  user.firstName = firstName;
  user.lastName = lastName;

  const errors = await validate(user);
  if (errors.length > 0) {
    return res.json({
      errors,
    });
  } else {
    await myDataSource.manager.save(user);
    return res.send(user);
  }
};

export const updateUser = async (req: Request, res: Response) => {};
