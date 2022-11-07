import React, { useEffect } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleRenderHomeAdmin } from "../../js/sidebarMenuJS";
const SidebarMenu = () => {
    const url = window.location.href;
    useEffect(() => {
        handleRenderHomeAdmin();
    }, [url]);

    return (
        <nav>
            <div className="sidebar-top">
                {/* <span className="shrink-btn">
                    <i className="bx bx-chevron-left" />
                </span> */}
                {/* <img src="./img/logo.png" className="logo" alt="" /> */}
                <h3 className="a text-center">Aqumex</h3>
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
                                <i class="fa-solid fa-gauge-simple"></i>
                            </div>
                            <span className="link hide">Bảng điều khiển</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={1}>
                        <a href="#" data-active={1}>
                            <div className="icon">
                                {/* <i className="bx bx-folder" />
                                <i className="bx bxs-folder" /> */}
                                <i class="fa-solid fa-house"></i>
                            </div>
                            <span className="link hide">Trang chủ</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={2}>
                        <a href="#" data-active={2}>
                            <div className="icon">
                                {/* <i className="bx bx-message-square-detail" />
                                <i className="bx bxs-message-square-detail" /> */}
                                <i class="fa-solid fa-trophy"></i>
                            </div>
                            <span className="link hide">Vinh danh</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={3}>
                        <a href="#" data-active={3}>
                            <div className="icon">
                                {/*  <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" /> */}
                                <i class="fa-solid fa-chart-simple"></i>
                            </div>
                            <span className="link hide">Thống kê</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={4}>
                        <a href="#" data-active={4}>
                            <div className="icon">
                                {/*  <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" /> */}
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <span className="link hide">Liên hệ</span>
                        </a>
                    </li>

                    <div className="tooltip">
                        <span className="show">Bảng điều khiển</span>
                        <span>Trang chủ</span>
                        <span>Vinh danh</span>
                        <span>Thống kê</span>
                        <span>Liên hệ</span>

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
    );
};
export default SidebarMenu;
