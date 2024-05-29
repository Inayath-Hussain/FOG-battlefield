import express from "express";
import morgan from "morgan";
import cors from "cors";

import { corsOption } from "./config/corsOptions";
import { mainRouter } from "./routes";
import { env } from "./config/env";

const app = express();


app.use(morgan("dev"));
app.use(cors(corsOption));


app.use("/api", mainRouter);


app.listen(env.PORT, () => console.log(`server listening on port ${env.PORT} in ${env.NODE_ENV}`))
