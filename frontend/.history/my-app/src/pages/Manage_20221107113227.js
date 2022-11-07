import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const Manage = () => {
    return (
        <div className="flex">
            <SidebarMenu props={user}></SidebarMenu>
        </div>
    );
};

export default Manage;