import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import "../css/sidebarMenuCSS.css"
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
                <div></div>
            </main>
        </div>

    );
};

export default HomePage;