import { IMenuItem } from "../services/quickmatch/getAllMenuItems";

const MenuDetails = ({ data }: { data: IMenuItem[] }) => {
    return (
        <div>

            {data.map(d => (
                <div className="my-6">
                    <p>{d.name}</p>
                    <img src={d.coverImage} alt="" />
                    {/* {d.coverImage} */}
                    {/* <d.coverImage /> */}
                </div>
            ))}
        </div>
    );
}

export default MenuDetails;