import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import envConfig from "./configs/env.config";
import { setupSwagger } from "./swagger";
import initWebRoutes from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

initWebRoutes(app)
app.get("/", (req, res) => {
    res.send(req.protocol + "://" + req.get("host"));
});

setupSwagger(app);

export default app;
