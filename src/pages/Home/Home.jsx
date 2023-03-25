import React from "react";
import LeftSideBar from "../../components/LeftSidebar/LeftSidebar";

const Home = () => {
    return <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
            <LeftSideBar />
        </div>
    </div>;
};

export default Home;