import { IMenu, Menu } from "../models/menu";

class MenuService {
    async addMenuItem({ coverImage, description, name }: IMenu) {
        const doc = new Menu({ name, coverImage, description })

        return await doc.save();
    }


    async getAllMenuItems() {
        return await Menu.find({});
    }
}


export const menuService = new MenuService();