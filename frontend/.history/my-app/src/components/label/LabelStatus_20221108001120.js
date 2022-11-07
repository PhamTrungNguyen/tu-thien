import React from "react";
import styled from "styled-components";


const LabelStatusStyles = styled.span`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const LabelStatus = ({ children, type = "default" }) => {
    let styleClassName = "text-gray-500 bg-gray-100";
    switch (type) {
        case "CanHoTro":
            styleClassName = "text-black bg-[#00b6f1]";
            break;
        case "DaHoanThanh":
            styleClassName = "text-black bg-[#2ba234]";
            break;
        case "DangVanDong":
            styleClassName = "text-black bg-[#e22d28]";
            break;
        case "Co":
            styleClassName = "text-black bg-green-500";
            break;
        case "Khong":
            styleClassName = "text-black bg-red-500";
            break;

        default:
            break;
    }
    return (
        <LabelStatusStyles className={styleClassName}>{children}</LabelStatusStyles>
    );
};
export default LabelStatus;
