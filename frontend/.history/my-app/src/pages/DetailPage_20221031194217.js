import React from 'react';
import Banner from '../layout/homePage/Banner';
import MainImage from '../layout/homePage/MainImage';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {
    return (

        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main className="w-full ">
                <div className={`p-[20px] w-full bg-[${COLORHOMEPAGE.CanHoTro}]  `}>
                    <a href="#1" className="w-full">Trang chủ </a>
                    <span className="w-full">/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
                </div>


            </main>
        </div>
    );
};

export default DetailPage;