
import BF5 from "@src/assets/images/battlefield-5.png";
import BF1 from "@src/assets/images/battlefield-1.png";
import BF4 from "@src/assets/images/battlefield-4.png";
import BFHardline from "@src/assets/images/battlefield-hardline.png";
import Career from "@src/assets/images/career.png";
import WatchIcon from "@src/assets/icons/side-menu-watch.svg";
import NewsIcon from "@src/assets/icons/side-menu-news.svg";
import HelpIcon from "@src/assets/icons/side-menu-help.svg";
import QuitIcon from "@src/assets/icons/side-menu-quit.svg";


import BorderProvider from "./Layout/BorderProvider";
import SideMenuItem from "./SideMenu/Item";


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

                <SideMenuItem title={i.title} url={i.url} activeUrl={BF4} />

                // <div key={i.url}
                //     className={`opacity-50 hover:opacity-100 relative group
                //     ${i.url === BF4 ? "border-0 border-l-[3px] border-l-light-orange" : ""}`}>

                //     <img src={i.url} alt="" width={30} key={i.url}
                //         className={`mx-auto relative cursor-pointer`} />


                //     {/* custom title(displayed when hovered on parent div) */}
                //     <p className="uppercase py-[2px] px-2 text-[10px] bg-menu-pop-up-color text-white text-nowrap
                //     hidden absolute z-10 left-[90%] top-1/2 -translate-y-1/2
                //     group-hover:block">{i.title}</p>

                // </div>
            ))}




            <div className="flex-1 flex flex-col justify-end gap-4 pb-8">

                {sideMenuBottomItems.map(i => (
                    <SideMenuItem title={i.title} url={i.url} activeUrl="" imageWidth={18} />
                ))}

            </div>

        </BorderProvider>
    );
}

export default SideMenu;