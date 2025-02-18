import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import envConfig from "./configs/env.config";
import { setupSwagger } from "./swagger";
// import authRoutes from "./route/auth.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send(req.protocol + "://" + req.get("host"));
});

setupSwagger(app);

export default app;
