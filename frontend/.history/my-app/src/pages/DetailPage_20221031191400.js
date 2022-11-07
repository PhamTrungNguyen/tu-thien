import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const DetailPage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <div>
                <a href="#1">Trang chủ</a>
                <span></span>
            </div>
        </div>
    );
};

export default DetailPage;