import React, { useEffect } from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
import ListPosts from "../layout/manage/ListPosts";

const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    useEffect(() => {
        window.location.reload();
    }, [])
    return (
        <div className="flex">
            {/* <SidebarMenu props={user}></SidebarMenu> */}
            <ListPosts></ListPosts>
        </div>
    );
};

export default Manage;
