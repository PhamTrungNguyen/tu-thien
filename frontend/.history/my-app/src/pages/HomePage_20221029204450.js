import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import "../css/homePageCSS.css";
import MainImage from "../layout/homePage/MainImage";
import ProjectImportant from "../layout/homePage/ProjectImportant";
import BarItem from "../components/bar/BarItem";
import ButtonStatus from "../components/button/ButtonStatus";
// import "../js/sidebarMenuJS";
const HomePage = () => {
    return (
        <div className="flex">
            <SidebarMenu></SidebarMenu>
            <main>
                <MainImage></MainImage>
                <ProjectImportant></ProjectImportant>
                <BarItem></BarItem>
                <div className="itemSupport p-[30px]">
                    <div className="grid grid-cols-4 gap-x-[20px]">
                        <div className="itemSupport-item border-2 flex flex-col items-center">
                            <div className="relative">
                                <ButtonStatus></ButtonStatus>
                                <img src="https://tc.cdnchinhphu.vn/Uploaded/nguyenthilananh/2017_04_25/treemngheo.jpg" alt="" />
                            </div>
                            <div className="p-[10px] ">
                                <h3 className="text-[17px] font-semibold text-[black] mb-[20px]">Chung tay cùng bà con tuyến kênh Phèn, xã Vĩnh Viễn, Long Mỹ, Hậu Giang xây con đường mong ước của bao thế hệ</h3>

                            </div>
                            <div className="px-[10px] mt-auto">
                                <p>Cập nhật ngày 29/11/2018 Quỹ Từ thiện Bông Sen đã chuyển số tiền 22.450.000 đồng đến người dân tại tuyến Kênh Phèn. Con đường bê tông, niềm mong mỏi của bao thế hệ gần 50 năm nay đã thành hiện thực. Người dân và các em nhỏ không còn nỗi sợ bùn lầy, trơn</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
