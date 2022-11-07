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
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftiengchuong.chinhphu.vn%2FHIVAIDS%2FTre-em-co-hoan-canh-dac-biet-can-duoc-ho-tro-va-giup-do%2F22534.vgp&psig=AOvVaw24t5-0v8HkjOaH0umYyKpW&ust=1667135058898000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIDI6J3AhfsCFQAAAAAdAAAAABAD" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
