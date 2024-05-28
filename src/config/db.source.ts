import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import { defaultConfig } from "./default.config";
import { Todo } from "../entity/todo.entity";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: defaultConfig.db.username,
  password: defaultConfig.db.password,
  database: defaultConfig.db.database,
  entities: [User, Todo],
  logging: false,
  synchronize: false,
  migrations: ["./migrations/*{.ts,.js}"],
});
