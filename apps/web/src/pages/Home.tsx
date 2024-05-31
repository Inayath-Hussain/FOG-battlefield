import FriendsSidebar from "@src/components/FriendsSidebar/Container";
import Header from "../components/Header";
import Main from "../components/Main";

const HomePage = () => {
    return (
        <main className="h-screen w-screen bg-main bg-no-repeat bg-size-main bg-position-main flex flex-col justify-start items-stretch cursor-default">
            <Header />

            <Main />

            <FriendsSidebar />
        </main>
    );

}

export default HomePage;