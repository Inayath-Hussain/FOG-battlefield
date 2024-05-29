import { RequestHandler } from "express";


interface IAddToMenuBody {
    name: string
    coverImage: string
    description: string
}

const validateAddToMenuBody: RequestHandler = (req, res, next) => {

}