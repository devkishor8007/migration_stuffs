import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import { defaultConfig } from "./default.config";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: defaultConfig.db.username,
  password: defaultConfig.db.password,
  database: defaultConfig.db.database,
  entities: [User],
  logging: false,
  synchronize: false,
});
