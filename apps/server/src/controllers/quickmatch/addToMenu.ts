import { RequestHandler } from "express";
import { IAddToMenuBody } from "../../middlewares/quickmatch/validateAddToMenuBody";
import { menuService } from "../../services/menu";
import { tryCatchWrapper } from "../../utilities/tryCatchWrapper";

const controller: RequestHandler<{}, {}, IAddToMenuBody> = async (req, res, next) => {
    const { description, name } = req.body;

    const coverImage = req.file as Express.Multer.File;

    await menuService.addMenuItem({ name, description, coverImage: coverImage.path })

    return res.status(201).json({ message: "success" })
}


export const addToMenuController = tryCatchWrapper(controller);
