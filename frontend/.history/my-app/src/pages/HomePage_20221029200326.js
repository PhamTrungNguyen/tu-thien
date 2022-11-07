import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <MainImage></MainImage>
                <ProjectImportant></ProjectImportant>
                <BarItem></BarItem>
                <div className="itemSupport p-[30px]">
                    <div className="grid grid-cols-4 gap-x-[20px]">
                        <div className="itemSupport-item">
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
