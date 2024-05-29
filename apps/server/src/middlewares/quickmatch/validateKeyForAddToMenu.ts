import { RequestHandler } from "express";
import { IAddToMenuBody } from "./validateAddToMenuBody";
import { env } from "../../config/env";


export const validateKeyForAddToMenu: RequestHandler<{}, {}, IAddToMenuBody> = (req, res, next) => {
    const { key } = req.body;

    switch (true) {
        case (!key):
            return res.status(401).json({ message: "key is required" })

        case (key !== env.KEY):
            return res.status(401).json({ message: "Invalid key" })
    }

    return next();
}