import React from 'react';

const DashboardLayout = () => {
    return (
        <div className="flex">
            <SidebarMenu props={user}></SidebarMenu>
        </div>
    );
};

export default DashboardLayout;