import express from "express";
import morgan from "morgan";
import cors from "cors";

import { corsOption } from "./config/corsOptions";
import { mainRouter } from "./routes";
import { env } from "./config/env";

export const app = express();


app.use(morgan("dev"));
app.use(cors(corsOption));
app.use(express.json());


app.use("/api", mainRouter);

