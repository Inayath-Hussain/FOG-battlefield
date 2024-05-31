import { IMenuItem } from "@src/services/quickmatch/getAllMenuItems";
import MainMenuItem from "./Item";
import { RemoveActiveItem, SetActiveItem } from "./Container";

import "./ItemsContainer.css";


export interface MenuItemsContainerProps {
    data: Pick<IMenuItem, "_id" | "name">[]
    setActiveItem: SetActiveItem
    removeActiveItem: RemoveActiveItem
}

const MainMenuItemsContainer: React.FC<MenuItemsContainerProps> = ({ data, removeActiveItem, setActiveItem }) => {

    return (
        <div className="pr-2 w-72 
        flex flex-col justify-start items-stretch 
        overflow-y-auto items-container-scroll">

            {data.map((d, index) => (
                <MainMenuItem _id={d._id} name={d.name} index={index} key={d._id}
                    setActiveItem={setActiveItem} removeActiveItem={removeActiveItem} />
            ))}

        </div>
    );
}

export default MainMenuItemsContainer;