import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import "../css/homePageCSS.css"
import MainImage from '../layout/homePage/MainImage';
import ProjectImportant from '../layout/homePage/ProjectImportant';
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <MainImage></MainImage>
                <ProjectImportant></ProjectImportant>
                <div className="project-item">
                    <h2>CÁC DỰ ÁN HỖ TRỢ NGƯỜI NGHÈO</h2>
                </div>
            </main>
        </div>

    );
};

export default HomePage;