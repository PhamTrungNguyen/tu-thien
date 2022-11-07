import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';

const DetailPage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <div className={`p-[20px] bg-[${color}]`}>
                <a href="#1">Trang chủ </a>
                <span>/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
            </div>
        </div>
    );
};

export default DetailPage;