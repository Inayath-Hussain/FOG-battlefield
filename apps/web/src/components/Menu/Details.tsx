import { IMenuItem } from "@src/services/quickmatch/getAllMenuItems";

interface Iprops {
    data: IMenuItem[]
    activeId: string
}

const MainMenuItemDetails: React.FC<Iprops> = ({ data, activeId }) => {

    const visibilityClass = (id: string) => id === activeId ? "block" : "hidden";


    return (

        <div>

            {data.map(d => (
                <div className={`${visibilityClass(d._id)} w-[40svw]`} key={d._id}>
                    <img src={d.coverImage} alt="" className="w-[40svw]" />

                    <p className="mt-4 text-xl uppercase">{d.name}</p>
                    <p className="text-sm whitespace-pre-line">{d.description}</p>
                </div>
            ))}

        </div>
    );
}

export default MainMenuItemDetails;