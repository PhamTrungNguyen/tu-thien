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
                <div className="pb-[30px]">
                    <div className={`py-[15px] px-[40px] bg-[${COLORHOMEPAGE.CanHoTro}] duration-300 text-[14px] `}>
                        <a href="#1" className="text-black hover:text-white ">Trang chủ </a>
                        <span className="">/ KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</span>
                    </div>
                </div>
                <div className="px-[40px] ]">
                    <h2 className="text-[28px] pb-[10px font-semibold border-b-[1px]">KỲ 525: THA PHƯƠNG MƯU SINH GẶP TAI NẠN NGHIÊM TRỌNG</h2>
                </div>


            </main>
        </div>
    );
};

export default DetailPage;