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
            styleClassName = "text-[#00b6f1] bg-[#00b6f1]";
            break;
        case "DaHoanThanh":
            styleClassName = "text-[#2ba234] bg-[#2ba234]";
            break;
        case "DangVanDong":
            styleClassName = "text-[#e22d28] bg-[#e22d28]";
            break;

        default:
            break;
    }
    return (
        <LabelStatusStyles className={styleClassName}>{children}</LabelStatusStyles>
    );
};
export default LabelStatus;
