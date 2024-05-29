import { Router } from "express";
import { multerUpload } from "../middlewares/quickmatch/multerUpload";
import { validateAddToMenuBody } from "../middlewares/quickmatch/validateAddToMenuBody";
import { addToMenuController } from "../controllers/quickmatch/addToMenu";
import { validateKeyForAddToMenu } from "../middlewares/quickmatch/validateKeyForAddToMenu";


const router = Router();


router.post("/menu", multerUpload.single("coverImage"), validateKeyForAddToMenu, validateAddToMenuBody, addToMenuController);


export { router as quickMatchRouter }