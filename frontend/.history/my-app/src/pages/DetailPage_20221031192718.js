import React from 'react';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <div>
                <div className={`p-[20px] bg-[${COLORHOMEPAGE.CanHoTro}] bg-[#00b6f1] `}>
                    <a href="#1">Trang chủ </a>
                    <span>/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;