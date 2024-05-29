import { Router } from "express";
import { quickMatchRouter } from "./quickmatch";


const router = Router();


router.use("/quickmatch", quickMatchRouter)


export { router as mainRouter }