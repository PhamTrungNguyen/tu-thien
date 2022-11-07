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
                <div className="px-[40px] ">
                    <h2 className="text-[28px] pb-[10px] font-semibold border-b-[2px]">KỲ 525: THA PHƯƠNG MƯU SINH GẶP TAI NẠN NGHIÊM TRỌNG</h2>
                </div>
                <div className="flex px-[40px] pt-[40px]">
                    <div className="w-[70%] ">
                        <div className="">


                            <img src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg" alt="" className="w-[300px] inline " />

                            <p className="inline ">Gia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê .</p>
                        </div>
                    </div>
                    <div className="w-[30%] flex justify-center">Bài viết liên quan</div>
                </div>

            </main>
        </div>
    );
};

export default DetailPage;