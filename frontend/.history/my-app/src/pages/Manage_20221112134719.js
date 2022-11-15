import React, { useEffect } from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
import ListPosts from "../layout/manage/ListPosts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const roleID = user.roleId
    const navigate = useNavigate();

    useEffect(() => {
        if (roleID === 3) {
            toast.error("Bạn không có quyền ", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
            navigate("/")
        }
    }, [])
    return (
        <div className="flex">
            {/* <SidebarMenu props={user}></SidebarMenu> */}
            <ListPosts></ListPosts>
        </div>
    );
};

export default Manage;