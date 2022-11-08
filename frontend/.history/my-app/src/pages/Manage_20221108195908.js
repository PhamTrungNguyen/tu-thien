import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
import ListPosts from "../layout/manage/ListPosts";

const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    return (
        <div className="flex">
            {/* <SidebarMenu styled="60.5px" props={user}></SidebarMenu>/ */}
            <ListPosts></ListPosts>
        </div>
    );
};

export default Manage;
