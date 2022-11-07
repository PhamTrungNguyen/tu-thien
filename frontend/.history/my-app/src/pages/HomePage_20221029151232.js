import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import "../css/sidebarMenuCSS.css"
import MainImage from '../layout/homePage/MainImage';
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <MainImage></MainImage>
            </main>
        </div>

    );
};

export default HomePage;