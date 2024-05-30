interface Iprops {
    url: string
    title: string
    activeUrl: string
    imageWidth?: number
}

const SideMenuItem: React.FC<Iprops> = ({ title, url, activeUrl, imageWidth }) => {
    return (
        <div key={url}
            className={`opacity-50 hover:opacity-100 relative group
                    ${url === activeUrl ? "border-0 border-l-[3px] border-l-light-orange" : ""}`}>

            <img src={url} alt="" width={imageWidth || 30}
                className="mx-auto relative" />


            {/* custom title(displayed when hovered on parent div) */}
            <p className="uppercase py-[2px] px-2 text-[10px] bg-menu-pop-up-color text-white text-nowrap
                    hidden absolute z-10 left-[90%] top-1/2 -translate-y-1/2
                    group-hover:block">{title}</p>

        </div>
    );
}

export default SideMenuItem;