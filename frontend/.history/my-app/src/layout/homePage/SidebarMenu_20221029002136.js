import React, { useEffect } from 'react';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleRenderHomeAdmin } from "../../js/sidebarMenuJS";
import imageCenter1 from "../../image/imageCenter1.jpg"
import imageCenter2 from "../../image/imageCenter2.jpg"
import imageCenter3 from "../../image/imageCenter3.jpg"
import imageCenter4 from "../../image/imageCenter4.jpg"
import imageCenter5 from "../../image/imageCenter5.jpg"
const SidebarMenu = () => {
    const url = window.location.href;
    useEffect(() => {
        handleRenderHomeAdmin();
    }, [url])

    return (
        <div className="flex">
            <NavMenu></NavMenu>
            <main>
                <MainImage></MainImage>
                <div className="">
                    <div className="flex items-center justify-center h-[400px] ">
                        <div className="flex items-start justify-center flex-col w-[50%] h-full p-[30px] bg-[#f5f5f5]">
                            <div className="caption-box mb-[20px]">
                                <p className="caption-text text-center text-[20px] font-bold">Dự Án Quan Trọng</p>
                            </div>
                            <div className="image-support ">
                                <img src="https://nld.mediacdn.vn/2017/8-chan-1-1501857270466.jpg" alt="" className="h-[80%]" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-col w-[50%] h-full p-[40px] bg-[#fbfbfc]">
                            <h3 className="font-semibold">KỲ 382: CHA BỆNH, CON THƠ, LO CHẠY ĂN TỪNG BỮA, GIA ĐÌNH NGHÈO LÂM CẢNH NỢ NẦN, TÚNG QUẪN</h3>
                            <p>Gia cảnh quá nghèo nên khi được bệnh viện báo bệnh không chữa được, người nhà không có điều kiện đưa chú Vũ nhập viện ở những bệnh viện lớn tại Sài Gòn đành đưa chú về nhà nằm chờ chết. Từ khi chú Vũ bị bệnh đến nay gia đình đã vay mượn hơn 70 triệu đồng.</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>

    )
};
export const NavMenu = () => {
    return (
        <nav>
            <div className="sidebar-top">
                <span className="shrink-btn">
                    <i className="bx bx-chevron-left" />
                </span>
                <img src="./img/logo.png" className="logo" alt="" />
                <h3 className="hide">Aqumex</h3>
            </div>
            {/* <div className="search">
            <i className="bx bx-search" />
            <input type="text" className="hide" placeholder="Quick Search ..." />
        </div> */}
            <div className="sidebar-links mt-[30px]">
                <ul>
                    <div className="active-tab" />
                    <li className="tooltip-element" data-tooltip={0}>
                        <a href="#" className="active" data-active={0}>
                            <div className="icon">
                                <i className="bx bx-tachometer" />
                                <i className="bx bxs-tachometer" />
                            </div>
                            <span className="link hide">Dashboard</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={1}>
                        <a href="#" data-active={1}>
                            <div className="icon">
                                <i className="bx bx-folder" />
                                <i className="bx bxs-folder" />
                            </div>
                            <span className="link hide">Projects</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={2}>
                        <a href="#" data-active={2}>
                            <div className="icon">
                                <i className="bx bx-message-square-detail" />
                                <i className="bx bxs-message-square-detail" />
                            </div>
                            <span className="link hide">Messages</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={3}>
                        <a href="#" data-active={3}>
                            <div className="icon">
                                <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" />
                            </div>
                            <span className="link hide">Analytics</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={4}>
                        <a href="#" data-active={4}>
                            <div className="icon">
                                <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" />
                            </div>
                            <span className="link hide">123</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={5}>
                        <a href="#" data-active={5}>
                            <div className="icon">
                                <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" />
                            </div>
                            <span className="link hide">abc</span>
                        </a>
                    </li>
                    <div className="tooltip">
                        <span className="show">Dashboard</span>
                        <span>Projects</span>
                        <span>Messages</span>
                        <span>Analytics</span>
                        <span>123</span>
                        <span>abc</span>
                    </div>
                </ul>
                {/*    <h4 className="hide">Shortcuts</h4> */}
                {/* <ul>
                 <li className="tooltip-element" data-tooltip={0}>
                    <a href="#" data-active={4}>
                        <div className="icon">
                            <i className="bx bx-notepad" />
                            <i className="bx bxs-notepad" />
                        </div>
                        <span className="link hide">Tasks</span>
                    </a>
                </li>
                 <li className="tooltip-element" data-tooltip={1}>
                    <a href="#" data-active={5}>
                        <div className="icon">
                            <i className="bx bx-help-circle" />
                            <i className="bx bxs-help-circle" />
                        </div>
                        <span className="link hide">Help</span>
                    </a>
                </li>
                  <li className="tooltip-element" data-tooltip={2}>
                    <a href="#" data-active={6}>
                        <div className="icon">
                            <i className="bx bx-cog" />
                            <i className="bx bxs-cog" />
                        </div>
                        <span className="link hide">Settings</span>
                    </a>
                </li>
                <div className="tooltip">
                    <span className="show">Tasks</span>
                    <span>Help</span>
                    <span>Settings</span>
                </div>
            </ul> */}
            </div>
            <div className="sidebar-footer">
                <a href="#" className="account tooltip-element" data-tooltip={0}>
                    <i className="bx bx-user" />
                </a>
                <div className="admin-user tooltip-element" data-tooltip={1}>
                    <div className="admin-profile hide">
                        {/* <img src="./img/face-1.png" alt="" /> */}
                        <div className="admin-info">
                            <h3>John Doe</h3>
                            <h5>Admin</h5>
                        </div>
                    </div>
                    <a href="#" className="log-out">
                        <i className="bx bx-log-out" />
                    </a>
                </div>
                <div className="tooltip">
                    <span className="show">John Doe</span>
                    <span>Logout</span>
                </div>
            </div>
        </nav>
    )
}
export const MainImage = () => {
    return (

        <div className="relative">
            <div className="grid grid-cols-5 items-center content-end ">
                <div className="">
                    <img src={imageCenter1} alt="" className="h-[300px] w-[300px] object-cover" />
                </div>
                <div className="">
                    <img src={imageCenter2} alt="" className="h-[300px] w-[300px] object-cover" />
                </div>
                <div className="">
                    <img src={imageCenter3} alt="" className="h-[300px] w-[300px] object-cover" />
                </div>
                <div className="">
                    <img src={imageCenter4} alt="" className="h-[300px] w-[300px] object-cover" />
                </div>
                <div className="">
                    <img src={imageCenter5} alt="" className="h-[300px] w-[300px] object-cover" />
                </div>

            </div>
            <div className="image-blur">
            </div>
            <div>
                <i className="text-center absolute text-image">"Chúng tôi cùng với bạn, trên hành trình kiếm tìm hạnh phúc, bằng cách lan tỏa lòng nhân ái, chuyển hóa khổ đau." </i>

            </div>

        </div>

    )
}
export default SidebarMenu;