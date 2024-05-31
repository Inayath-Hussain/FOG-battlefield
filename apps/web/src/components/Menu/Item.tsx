import { RemoveActiveItem, SetActiveItem } from "./Container"

interface Iprops {
    _id: string
    name: string
    index: number
    setActiveItem: SetActiveItem
    removeActiveItem: RemoveActiveItem
}

const MainMenuItem: React.FC<Iprops> = ({ _id, name, index, setActiveItem, removeActiveItem }) => {

    const textColor = index <= 2 ? "text-light-orange" : ""

    return (
        <p onMouseEnter={() => setActiveItem(_id)} onMouseLeave={removeActiveItem}
            className={`p-2 pl-3 text-sm ${textColor} uppercase text-nowrap
                bg-[rgba(0,0,0,0)] hover:bg-white hover:text-black
                border-0 border-t-2 border-t-section-border-color`}>{name}</p>
    );
}

export default MainMenuItem;