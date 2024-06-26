import { useEffect, useMemo, useState } from "react";

import { ApiError } from "@src/services/error";
import { IMenuItem, getAllMenuItemsService } from "@src/services/quickmatch/getAllMenuItems";
import MainMenuItemsContainer, { MenuItemsContainerProps } from "./ItemsContainer";
import MainMenuItemDetails from "./Details";
import { createPortal } from "react-dom";
import LoaderModal from "../Modal/Loader";



export type SetActiveItem = (id: string) => void
export type RemoveActiveItem = () => void


const extractName = (data: IMenuItem[]): MenuItemsContainerProps["data"] => {
    return data.map(d => ({
        _id: d._id,
        name: d.name
    }))
}


const MainMenu = () => {

    const [data, setData] = useState<IMenuItem[]>([]);
    const [activeMenu, setActiveMenu] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const setActiveItem = (id: string) => setActiveMenu(id)
    const removeActiveItem = () => setActiveMenu("");


    useEffect(() => {
        const call = async () => {
            setIsLoading(true)
            const result = await getAllMenuItemsService();
            setIsLoading(false)

            if (result instanceof ApiError) return alert(result.message);

            setData(result);
        }

        call()
    }, []);

    const loaderDiv = useMemo(() => document.getElementById("loader"), []);
    console.log(loaderDiv)

    const names = useMemo(() => extractName(data), [data]);

    return (
        <div className="pl-6 flex flex-row gap-8 items-stretch overflow-hidden">
            <MainMenuItemsContainer data={names} setActiveItem={setActiveItem} removeActiveItem={removeActiveItem} />

            <MainMenuItemDetails data={data} activeId={activeMenu} />

            {isLoading ? createPortal(<LoaderModal />, loaderDiv as Element) : null}
        </div>
    );
}

export default MainMenu;