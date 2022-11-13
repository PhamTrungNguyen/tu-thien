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
    const url = window.location.href;
    console.log("🚀 ~ file: Manage.js ~ line 13 ~ Manage ~ url", url)
    // this.refresh()
    // window.location.reload();
    useEffect(() => {
        if (roleID === 1 || !user) {
            toast.error("Bạn không có quyền truy cập !!!", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
            navigate("/")
        }
        // window.location.reload();
    }, [roleID])
    useEffect(() => {
        if (url !== "http://localhost:3000/quan-ly") {
            window.location.reload();

        }
    }, [url])
    return (
        <div className="flex">
            {/* <SidebarMenu props={user}></SidebarMenu> */}
            <ListPosts></ListPosts>
        </div>
    );
};

export default Manage;
