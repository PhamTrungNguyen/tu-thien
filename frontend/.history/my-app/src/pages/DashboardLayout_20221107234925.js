import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const DashboardLayout = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))

    return (
        <div className="flex">
            <SidebarMenu props={user}></SidebarMenu>
        </div>
    );
};

export default DashboardLayout;