import React, { useEffect } from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
import ListPosts from "../layout/manage/ListPosts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const roleID = user?.roleId
    const navigate = useNavigate();
    // this.refresh()
    useEffect(() => {
        if (roleID === 1 || !user) {
            toast.error("Bạn không có quyền truy cập !!!", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
            navigate("/")
        }
        window.location.reload(false);
    }, [roleID])
    return (
        <div className="flex">
            {/* <SidebarMenu props={user}></SidebarMenu> */}
            <ListPosts></ListPosts>
        </div>
    );
};

export default Manage;
