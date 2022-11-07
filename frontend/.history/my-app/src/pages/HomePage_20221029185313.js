import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <MainImage></MainImage>
                <ProjectImportant></ProjectImportant>
                <div className="project-item p-[30px] pb-[50px]">
                    <div className="project-item_text relative">
                        <h4 className="text-[28px] font-[400] text-[#004256] leading-[40px]">
                            CÁC DỰ ÁN <strong className="font-[600]">HỖ TRỢ NGƯỜI NGHÈO</strong>
                        </h4>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
