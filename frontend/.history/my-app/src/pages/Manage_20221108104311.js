import React from "react";
import SidebarMenu from "../layout/homePage/SidebarMenu";
import styled from "styled-components";
import LabelStatus from "../components/label/LabelStatus";
import ActionView from "../components/actions/ActionView";
import ActionEdit from "../components/actions/ActionEdit";
import ActionDelete from "../components/actions/ActionDelete";
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  table {
      overflow-x: auto;
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
  }
  th {
    padding: 20px 20px;
    font-weight: 600;
    text-align: center;
  }
  td {
    padding: 15px 30px;
  }
  tbody {
  }
  .title-post {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
    max-width: 100px;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
const Manage = () => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    return (
        <div className="flex">
            <SidebarMenu styled="60.5px" props={user}></SidebarMenu>


        </div>
    );
};

export default Manage;
