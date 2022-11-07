import React from 'react';
import Banner from '../layout/homePage/Banner';
import MainImage from '../layout/homePage/MainImage';
import SidebarMenu from '../layout/homePage/SidebarMenu';
import { COLORHOMEPAGE } from '../menuColor';

const DetailPage = () => {
    return (

        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main className="">
                <div className={`p-[20px] bg-[${COLORHOMEPAGE.CanHoTro}]  `}>
                    <a href="#1" className="text-white">Trang chủ </a>
                    <span className="">/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
                </div>


            </main>
        </div>
    );
};

export default DetailPage;