import { PropsWithChildren } from "react";

interface FriendsSidebarSectionProps {
    sectionIcon: string
    sectionText: string
}

const FriendsSidebarSection: React.FC<PropsWithChildren<FriendsSidebarSectionProps>> = ({ sectionIcon, sectionText, children }) => {
    return (
        <div className="pt-2 pb-4
        border-0 group-hover:border-t-2 border-t-section-border-color">

            {/* section icon and text */}
            <div className="flex flex-row gap-2">
                <img src={sectionIcon} alt="" />
                <p className="text-xs opacity-0 uppercase
                group-hover:opacity-100">{sectionText}</p>
            </div>

            {/* items of section */}
            {children}

        </div>
    );
}

export default FriendsSidebarSection;