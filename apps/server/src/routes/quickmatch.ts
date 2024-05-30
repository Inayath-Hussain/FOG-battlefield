import { Router } from "express";
import { multerUpload } from "../middlewares/quickmatch/multerUpload";
import { validateAddToMenuBody } from "../middlewares/quickmatch/validateAddToMenuBody";
import { addToMenuController } from "../controllers/quickmatch/addToMenu";
import { validateKeyForAddToMenu } from "../middlewares/quickmatch/validateKeyForAddToMenu";
import { getAllMenuItemsController } from "../controllers/quickmatch/getAllMenuItems";


const router = Router();


router.post("/menu", multerUpload.single("coverImage"), validateKeyForAddToMenu, validateAddToMenuBody, addToMenuController);

router.get("/menu", getAllMenuItemsController)

export { router as quickMatchRouter }