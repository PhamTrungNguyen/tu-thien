import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import ButtonStatus from "../components/button/ButtonStatus";
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
                        <div className="itemSupport-item border-2">
                            <div className="relative">
                                <ButtonStatus></ButtonStatus>
                                <img src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg" alt="" />
                            </div>
                            <div>
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
