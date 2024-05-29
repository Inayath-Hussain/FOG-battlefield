import { CorsOptions } from "cors";


export const corsOption: CorsOptions = process.env.NODE_ENV === "production" ?
    {
        origin: []
    }
    :
    {
        origin: "*"
    }