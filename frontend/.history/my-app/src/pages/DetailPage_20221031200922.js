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
                <div className="flex">
                    <div>
                        <p>Gia đình ở quê thuộc diện khó khăn, ba mẹ không có công việc ổn định, ai thuê gì làm đó nuôi 3 anh em. Người anh lớn từ sớm đã vào Đồng Nai làm công nhân phụ giúp gia đình, L là người con thứ, nghỉ học từ năm lớp 7, ở nhà với ba mẹ đến nay thì muốn vào HCM tìm công việc mưu sinh. Một mình lặn lội từ miền Trung vào Sài Gòn với người cậu. L chỉ đi làm được vài tháng thì xảy ra chuyện không may. Những ngày đầu một mình người cậu chăm lo cho L trong khi chờ bố mẹ em vào.</p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default DetailPage;