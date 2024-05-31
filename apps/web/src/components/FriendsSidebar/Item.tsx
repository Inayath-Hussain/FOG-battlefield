import { MemoExoticComponent } from "react";
import "./Item.css";

import { JoinProps } from "../Icons/Join";

export interface FriendsSliderbarItemProps {
    data: {
        image: string | MemoExoticComponent<(props: JoinProps) => JSX.Element>
        name: string
    }
    type: "online" | "offline" | "join"
}

const FriendsSidebarItem: React.FC<FriendsSliderbarItemProps> = ({ data, type }) => {

    let borderColor = "";

    switch (type) {
        case ("online"):
            borderColor = "border-l-online"
            break;


        case ("offline"):
            borderColor = "border-l-white"
            break;


        default:
            borderColor = "border-l-transparent"
    }

    const margin = type !== "join" ? "ml-1" : ""

    return (
        <div className={`mt-2 friend-sidebar-item
        border-0 border-l-[3px] ${borderColor}
        ${type === "offline" ? "opacity-60 hover:opacity-100" : ""}`}>


            <div className={`${margin} flex flex-row justify-start items-stretch`}>

                {
                    typeof data.image === "string" ?
                        // friend's profile pic
                        <img src={data.image} alt="" width={38} height={38} />
                        :
                        // join squad icon
                        <data.image width={42} height={42}
                            className="fill-white join-icon opacity-30 p-0 m-0 border-0"
                            plusclassname="fill-black plus" />
                }


                <div className="text-[10px] pl-2 flex-1 
                flex flex-col justify-center
                opacity-0 group-hover:opacity-100
                 highlight">
                    {/* friend username */}
                    <p>{data.name}</p>
                    {type !== "join"
                        ?

                        // online status
                        <p className="capitalize text-[#ffffffb3]
                        online-status">{type}</p>
                        :
                        null
                    }
                </div>
            </div>


        </div>
    );
}

export default FriendsSidebarItem;