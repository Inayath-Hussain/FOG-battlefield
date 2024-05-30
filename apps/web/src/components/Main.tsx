import GridProvider from "./Layout/GridProvider";
import SideMenu from "./SideMenu";

const Main = () => {
    return (
        <GridProvider className="flex-1">

            <SideMenu />

            <div></div>

        </GridProvider>
    );
}

export default Main;