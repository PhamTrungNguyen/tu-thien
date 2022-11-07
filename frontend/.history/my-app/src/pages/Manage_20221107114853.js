import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const Manage = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))
    return (
        <div className="flex">
            <SidebarMenu styled="top: 60.5px;" props={user}></SidebarMenu>
        </div>
    );
};

export default Manage;