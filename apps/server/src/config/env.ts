import { config } from "dotenv";
import { str, port, cleanEnv } from "envalid";


config();

export const env = cleanEnv(process.env, {
    PORT: port({ default: 8080 }),
    NODE_ENV: str()
})