
import BF5 from "@src/assets/images/battlefield-5.png";
import BF1 from "@src/assets/images/battlefield-1.png";
import BF4 from "@src/assets/images/battlefield-4.png";
import BFHardline from "@src/assets/images/battlefield-hardline.png";
import Career from "@src/assets/images/career.png";
import WatchIcon from "@src/assets/icons/side-menu-watch.svg";
import NewsIcon from "@src/assets/icons/side-menu-news.svg";
import HelpIcon from "@src/assets/icons/side-menu-help.svg";
import QuitIcon from "@src/assets/icons/side-menu-quit.svg";


import BorderProvider from "../Layout/BorderProvider";
import SideMenuItem from "./Item";


interface Item {
    url: string
    title: string
}

const SideMenu = () => {

    const sideMenuItems: Item[] = [
        { url: BF5, title: "BATTLEFIELD 5" },
        { url: BF1, title: "BATTLEFIELD 1" },
        { url: BF4, title: "BATTLEFIELD 4" },
        { url: BFHardline, title: "BATTLEFIELD hardline" },
        { url: Career, title: "CAREER" },
        { url: WatchIcon, title: "WATCH" },
        { url: NewsIcon, title: "NEWS" }
    ];


    const sideMenuBottomItems: Item[] = [
        { url: HelpIcon, title: "help" },
        { url: QuitIcon, title: "quit" }
    ]


    return (
        <BorderProvider className="flex flex-col justify-stretch items-stretch gap-4">

            {sideMenuItems.map((i) => (
                <SideMenuItem title={i.title} url={i.url} activeUrl={BF4} key={i.title} />

            ))}




            <div className="flex-1 flex flex-col justify-end gap-4 pb-8">

                {sideMenuBottomItems.map(i => (
                    <SideMenuItem title={i.title} url={i.url} activeUrl="" imageWidth={18} key={i.title} />
                ))}

            </div>

        </BorderProvider>
    );
}

export default SideMenu;