import React, { useEffect, useState } from "react";
import { handleRenderHomeAdmin } from "../../js/sidebarMenuJS";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const SidebarMenu = ({ styled, props }) => {
    const navigate = useNavigate();
    const url = window.location.href;
    const a = localStorage.getItem("check", JSON.parse)
    let classCheck = ""
    useEffect(() => {
        handleRenderHomeAdmin();
    }, [url]);
    useEffect(() => {
        if (a) {
            classCheck = 'text-red-500';
        }
        else {
            classCheck = "";
        }
        console.log(classCheck)
    }, [a]);
    const [check, setCheck] = useState(true);
    console.log("🚀 ~ file: SidebarMenu.js ~ line 13 ~ SidebarMenu ~ a", a)
    return (
        <nav>
            <div className="sidebar-top pb-[-50px] pb-[50px]">
                <span className="shrink-btn">
                    <i className="bx bx-chevron-left" />
                </span>
                {/* <img src="./img/logo.png" className="logo" alt="" /> */}
                <h3 className="hide hide_title text-center">
                    Quỹ từ thiện Tình Thương{" "}
                </h3>
            </div>
            {/* <div className="search">
            <i className="bx bx-search" />
            <input type="text" className="hide" placeholder="Quick Search ..." />
        </div> */}
            <div className="sidebar-links mt-[30px]">
                <ul>
                    {/* <div
                        className="active-tab duration-300"
                        style={{ top: `${styled}` }}
                    /> */}
                    <li className="tooltip-element" data-tooltip={0}>
                        <NavLink
                            to={"/"}
                            onClick={() => {

                                localStorage.setItem("check", true)
                            }}
                            className={classCheck}

                        >
                            <div className="icon" data-active={0}>
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <span className="link hide">Trang chủ</span>
                        </NavLink>
                    </li>
                    <li className="tooltip-element" data-tooltip={1}>
                        <NavLink
                            to={"/quan-ly"}
                            className={({ isActive }) => {
                                return isActive ? "text-red-500" : "";
                            }}
                            onClick={() => {

                                localStorage.setItem("check", false)
                            }}


                        >
                            <div className="icon" data-active={1}>
                                {/* <i className="bx bx-folder" />
                                <i className="bx bxs-folder" /> */}
                                <i className="fa-solid fa-gauge-simple"></i>
                            </div>
                            <span className="link hide">Quản lý</span>
                        </NavLink>
                    </li>
                    <li className="tooltip-element" data-tooltip={2}>
                        <NavLink
                            to={"/vinh-danh"}
                            className={({ isActive }) => {
                                return isActive ? "text-red-500" : "";
                            }}
                            onClick={() => { localStorage.setItem("check", false) }}
                        >
                            <div className="icon" data-active={2}>
                                {/* <i className="bx bx-message-square-detail" />
                                <i className="bx bxs-message-square-detail" /> */}
                                <i className="fa-solid fa-trophy"></i>
                            </div>
                            <span className="link hide">Vinh danh</span>

                        </NavLink>
                    </li>
                    <li className="tooltip-element" data-tooltip={3}>
                        <a href="#" data-active={3}>
                            <div className="icon">
                                {/*  <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" /> */}
                                <i className="fa-solid fa-chart-simple"></i>
                            </div>
                            <span className="link hide">Thống kê</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={4}>
                        <a href="#" data-active={4}>
                            <div className="icon">
                                {/*  <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" /> */}
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <span className="link hide">Liên hệ</span>
                        </a>
                    </li>

                    <div className="tooltip">
                        <span className="show">Trang chủ</span>
                        <span>Quản lý</span>
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
                            <h3 className="cursor-pointer">
                                <a href="#1">{` ${props?.displayName
                                    ? props?.displayName
                                    : props?.username || "Vui lòng đăng nhập"
                                    } `}</a>
                            </h3>
                            {props?.role_name === 1 && <h5>Người dùng</h5>}
                            {props?.role_name === 2 && <h5>Quản lý</h5>}
                            {props?.role_name === 3 && <h5>Admin</h5>}
                        </div>
                    </div>
                    <button
                        className="log-out"
                        onClick={() => {
                            if (!props?.username) {
                                navigate("/signpage");
                                window.location.reload();
                            } else {
                                localStorage.setItem("userLogin", JSON.stringify(""));
                                window.location.reload();
                            }
                        }}
                    >
                        {props?.username ? (
                            <i className="bx bx-log-out" />
                        ) : (
                            <i className="bx bx-log-in" />
                        )}
                    </button>
                </div>
                <div className="tooltip">
                    {/*  
{` ${props.displayName === "undefined" ? props.displayName : props.username || "Vui lòng đăng nhập"
                            }  `} 
                            */}
                    <span className="show">
                        {` ${props?.displayName === "undefined"
                            ? props?.displayName
                            : props?.username || "Vui lòng đăng nhập"
                            }  `}{" "}
                    </span>

                    <span>{`${props?.username ? "Đăng xuất" : "Đăng nhập"}`}</span>
                </div>
            </div>
        </nav>
    );
};
export default SidebarMenu;
