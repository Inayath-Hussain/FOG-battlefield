import { AxiosError, HttpStatusCode } from "axios"
import { apiURL } from "../apiURLs"
import { axiosInstance } from "../axiosInstance"
import { ApiError } from "../error"


interface Ipayload {
    name: string
    description: string
    key: string
    coverImage: File
}


export const addMenuItemService = (payload: Ipayload) =>
    new Promise(async (resolve) => {
        try {
            const result = await axiosInstance.post(apiURL.addNewMenu, payload, { headers: { "Content-Type": "multipart/form-data" } })
            resolve(result.data.message)
        }
        catch (ex) {
            if (ex instanceof AxiosError) {
                switch (true) {
                    case (ex.response?.status === HttpStatusCode.UnprocessableEntity):
                        return resolve(new AddMenuBodyError(ex.response.data.message, ex.response.data.errors))


                    case (ex.response?.status === HttpStatusCode.Unauthorized):
                        return resolve(new ApiError(ex.response.data.message))
                }
            }

            console.log(ex)
            return resolve(new ApiError("Please try again later"))
        }
    })





/**
 * class to store all the request body errors
*/
export class AddMenuBodyError {
    message: string;
    errors: { name?: string, description?: string }

    constructor(message: string, errors: AddMenuBodyError["errors"]) {
        this.message = message;
        this.errors = errors;
    }
}