import React, { useEffect } from 'react';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { handleRenderHomeAdmin } from "../../js/sidebarMenuJS";
const SidebarMenu = () => {
    const url = window.location.href;
    useEffect(() => {
        handleRenderHomeAdmin();
    }, [url])

    return (
        <nav>
            <div className="sidebar-top">
                <span className="shrink-btn">
                    <i className="bx bx-chevron-left" />
                </span>
                {/* <img src={logo} className="logo" alt="" /> */}
                <h3 className="hide">PI GROUP</h3>
            </div>
            <div className="search">
                <i className="bx bx-search" />
                <input type="text" className="hide" placeholder="Tìm kiếm ..." />
            </div>
            <div className="sidebar-links">
                <ul>
                    <div className="active-tab" />
                    <li className="tooltip-element" data-tooltip={0}>
                        <a href="#1" className="active" data-active={0}>
                            <div className="icon">
                                <i className="bx bx-tachometer" />
                                <i className="bx bxs-tachometer" />
                            </div>
                            {/* <span className="link hide" >Bảng điều khiển</span> */}
                            {/* <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="link hide"
              >
                Quản lý
              </Button> */}
                            <span className="link hide" >
                                Quản lý
                            </span>
                            {/* <ManageSubMenus
                                anchorEl={anchorEl}
                                open={open}
                                close={(data) => setAnchorEl(data)}
                            /> */}
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={1}>
                        <a href="#1" data-active={1}>
                            <div className="icon">
                                <i className="bx bx-folder" />
                                <i className="bx bxs-folder" />
                            </div>
                            <span className="link hide">Quản lý đề thi</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={2}>
                        <a href="#1" data-active={2}>
                            <div className="icon">
                                <i className="bx bx-message-square-detail" />
                                <i className="bx bxs-message-square-detail" />
                            </div>
                            <span className="link hide">Thi thử</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={3}>
                        <a href="#1" data-active={3}>
                            <div className="icon">
                                <i className="bx bx-bar-chart-square" />
                                <i className="bx bxs-bar-chart-square" />
                            </div>
                            <span className="link hide">Bảng xếp hạng tuần</span>
                        </a>
                    </li>
                    <div className="tooltip">
                        <span className="show">Bảng điều khiển</span>
                        <span>Quản lý đề thi</span>
                        <span>Thi thử</span>
                        <span>Bảng xếp hạng tuần</span>
                    </div>
                </ul>
                <h4 className="hide">Shortcuts</h4>
                <ul>
                    <li className="tooltip-element" data-tooltip={0}>
                        <a href="#1" data-active={4}>
                            <div className="icon">
                                <i className="bx bx-notepad" />
                                <i className="bx bxs-notepad" />
                            </div>
                            <span className="link hide">Tasks</span>
                        </a>
                    </li>
                    <li className="tooltip-element" data-tooltip={1}>
                        <a href="#1" data-active={5}>
                            <div className="icon">
                                <i className="bx bx-help-circle" />
                                <i className="bx bxs-help-circle" />
                            </div>
                            <span className="link hide">Help</span>
                        </a>
                    </li>

                    <div className="tooltip">
                        <span className="show">Tasks</span>
                        <span>Help</span>
                        <span>Settings</span>
                    </div>
                </ul>
            </div>
            {/* <div className="sidebar-footer">
                <a href="#1" className="account tooltip-element" data-tooltip={0}>
                    <i className="bx bx-user" />
                </a>
                <div className="admin-user tooltip-element" data-tooltip={1}>
                    <div className="admin-profile hide">
                       
                        <div className="admin-info">
                            <h3>Pham Minh Tuan</h3>
                            <h5>Admin</h5>
                        </div>
                    </div>
                    <a href="#1" className="log-out">
                        <i className="bx bx-log-out" />
                    </a>
                </div>
                <div className="tooltip">
                    <span className="show">John Doe</span>
                    <span>Logout</span>
                </div>
            </div> */}
        </nav>
    )
};

export default SidebarMenu;