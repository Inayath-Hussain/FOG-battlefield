import GridProvider from "./Layout/GridProvider";
import SideMenu from "./SideMenu/Container";

const Main = () => {
    return (
        <GridProvider className="flex-1">

            <SideMenu />

            <div></div>

        </GridProvider>
    );
}

export default Main;