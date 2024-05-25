import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dataSource } from "./config/db.connection";
import routes from "./routers";

// establish database connection
dataSource;

// create and setup express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(morgan("combined"));

app.use("/", routes);

// start express server
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`server is listening at port ${port}`);
});
