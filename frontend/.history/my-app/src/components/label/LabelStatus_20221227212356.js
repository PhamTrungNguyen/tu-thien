import React from "react";
import styled from "styled-components";


const LabelStatusStyles = styled.span`
.text{
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    background-image: linear-gradient(to bottom, ${props => props.color1 || "#e22d28"}, ${props => props.color2 || "#e22d28"});

}
`;

const LabelStatus = ({ children, type = "default", color1, color2 }) => {
    console.log("🚀 ~ file: LabelStatus.js:14 ~ LabelStatus ~ color", color)
    let styleClassName = "text-gray-500 bg-gray-100";
    switch (type) {
        case "CanHoTro":
            styleClassName = "text-black ";
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
        <LabelStatusStyles color1={color1} color2={color2}>
            <div className={`${styleClassName} text`}>
                {children}
            </div>
        </LabelStatusStyles>
    );
};
export default LabelStatus;
