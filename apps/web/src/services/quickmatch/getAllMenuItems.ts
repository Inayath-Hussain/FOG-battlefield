import { apiURL } from "../apiURLs"
import { axiosInstance } from "../axiosInstance"
import { ApiError } from "../error"


export interface IMenuItem {
    _id: string
    name: string
    description: string
    coverImage: string
}


export const getAllMenuItemsService = () =>
    new Promise<IMenuItem[] | ApiError>(async (resolve) => {
        try {
            const result = await axiosInstance.get<IMenuItem[]>(apiURL.getAllMenuItems);
            resolve(result.data)
        }
        catch (ex) {
            console.log(ex)
            return resolve(new ApiError("Please try again later"))
        }
    })