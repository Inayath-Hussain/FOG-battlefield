import BackIcon from "../assets/icons/back.svg";
import BorderProvider from "./Layout/BorderProvider";
import GridProvider from "./Layout/GridProvider";

const Header = () => {
    return (
        <GridProvider>

            {/* empty space */}
            <BorderProvider children={null} />


            <div className="pl-6 pt-4 pb-16">

                {/* first text */}
                <div className="flex flex-row justify-start items-center gap-4">

                    {/* back button */}
                    <img src={BackIcon} alt="" />

                    <p className="text-xs uppercase hover:font-bold">multiplayer</p>

                    <h3 className="">/</h3>
                </div>


                <p className="text-4xl uppercase">quickmatch</p>

            </div>

        </GridProvider>
    );
}

export default Header;