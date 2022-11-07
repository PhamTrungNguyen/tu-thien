import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import "../css/sidebarMenuCSS.css"
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>

            </main>
        </div>

    );
};

export default HomePage;