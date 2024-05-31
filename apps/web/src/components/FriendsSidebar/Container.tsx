import SquadIcon from "@src/assets/icons/squad.svg";
// import JoinIcon from "@src/assets/icons/join.svg";
import OnlineIcon from "@src/assets/icons/online.svg";
import OfflineIcon from "@src/assets/icons/offline.svg";

import OnlineFriendPic from "@src/assets/images/online-friend-profile-pic.png";
import OfflineFriendPic from "@src/assets/images/offline-friend-profile-pic.png";

import JoinIcon from "../Icons/Join";

import FriendsSidebarSection from "./Section";
import FriendsSidebarItem, { FriendsSliderbarItemProps } from "./Item";




const FriendsSidebar = () => {

    const joinSquad: FriendsSliderbarItemProps["data"] = { image: JoinIcon, name: "Squad Join" }

    const onlineFriends: FriendsSliderbarItemProps["data"][] = [
        { image: OnlineFriendPic, name: "MaryJane" }
    ]

    const offlineFriends: FriendsSliderbarItemProps["data"][] = [
        { image: OfflineFriendPic, name: "420" }
    ]

    return (
        <div className="fixed top-0 bottom-0 right-0 h-screen w-48 pt-6 pl-2 
        
        bg-friends-sidebar-initial hover:bg-friends-sidebar-hover-color
        group
        translate-x-[130px] hover:translate-x-0
        transition-all duration-300">

            {/* Join squad */}
            <FriendsSidebarSection sectionIcon={SquadIcon} sectionText="squad">
                <FriendsSidebarItem data={joinSquad} type="join" />
            </FriendsSidebarSection>


            {/* online friends */}
            <FriendsSidebarSection sectionIcon={OnlineIcon} sectionText="Online">
                {onlineFriends.map(ol => (
                    <FriendsSidebarItem data={ol} type="online" />
                ))}
            </FriendsSidebarSection>


            {/* offline friends */}
            <FriendsSidebarSection sectionIcon={OfflineIcon} sectionText="Offline">
                {offlineFriends.map(of => (
                    <FriendsSidebarItem data={of} type="offline" />
                ))}
            </FriendsSidebarSection>

        </div>
    );
}

export default FriendsSidebar;