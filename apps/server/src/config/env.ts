import { config } from "dotenv";
import { str, port, cleanEnv } from "envalid";


config();

export const env = cleanEnv(process.env, {
    PORT: port({ default: 8080 }),
    NODE_ENV: str(),
    MONGODB_URI: str(),

    KEY: str(),

    FIREBASE_STORAGE_BUCKET: str(),
    FIREBASE_PROJECT_ID: str(),
    FIREBASE_PRIVATE_KEY: str(),
    FIREBASE_CLIENT_EMAIL: str()
})