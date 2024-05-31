import GridProvider from "./Layout/GridProvider";
import SideMenu from "./SideMenu/Container";
import MainMenu from "./Menu/Container";

const Main = () => {
    return (
        <GridProvider className="flex-1 overflow-hidden">

            <SideMenu />

            <MainMenu />

        </GridProvider>
    );
}

export default Main;