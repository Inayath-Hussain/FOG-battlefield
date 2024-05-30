import { RequestHandler } from "express";
import { menuService } from "../../services/meny"
import { tryCatchWrapper } from "../../utilities/tryCatchWrapper";

const controller: RequestHandler = async (req, res, next) => {
    const data = await menuService.getAllMenuItems();

    return res.status(200).json(data)
}


export const getAllMenuItemsController = tryCatchWrapper(controller);