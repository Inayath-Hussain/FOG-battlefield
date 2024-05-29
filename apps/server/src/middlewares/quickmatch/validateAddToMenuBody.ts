import { RequestHandler } from "express";
import { sanitizeAll } from "../sanitizeBase";
import { nameOrDescriptionValidator } from "./validator";


export interface IAddToMenuBody {
    name: string
    description: string
    key: string
}



/**
 * Validate to check if request body contains required fields to add new item (or mode) to menu
 */
export const validateAddToMenuBody: RequestHandler<{}, {}, IAddToMenuBody> = (req, res, next) => {
    sanitizeAll(req.body);

    const { name, description, key } = req.body;

    // error object to store any errors of request body
    const errorObj = new Error("Invalid request body");

    const nameValidationResult = nameOrDescriptionValidator(name, "name");
    const descriptionValidationResult = nameOrDescriptionValidator(description, "description");


    // add errorMessage if name field is not valid
    if (nameValidationResult.valid === false) errorObj.addFieldErrors("name", nameValidationResult.errorMessage)


    // add errorMessage if description field is not valid
    if (descriptionValidationResult.valid === false) errorObj.addFieldErrors("description", descriptionValidationResult.errorMessage)


    // if there are any field errors in request then send error response
    if (Object.keys(errorObj.errors).length > 0) {
        return res.status(422).json(errorObj)
    }

    // checks if coverImage is present in request body.
    if (!req.file) errorObj.addFieldErrors("coverImage", "coverImage is required")

    return next();
}





// class to store any field errors of request object
class Error {
    message: string;
    errors: Partial<IAddToMenuBody & { coverImage: string }>;

    constructor(message: string, errors = {}) {
        this.message = message
        this.errors = errors
    }

    addFieldErrors(key: keyof Error["errors"], errorMessage: string) {
        this.errors[key] = errorMessage
    }

}