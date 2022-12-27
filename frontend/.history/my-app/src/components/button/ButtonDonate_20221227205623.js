import React from "react";
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
 cursor: pointer;
  .donate {
    text-transform: uppercase;
    border: 2px solid #ffffff;
    padding: ${props => props.padding || "5px 20px"};;
    /* background-color: ${props => props.color || "#e22d28"}; */
    background-image: linear-gradient(to bottom, ${props => props.color1 || "#e22d28"}, ${props => props.color2 || "#e22d28"});

    text-align: center;
    font-size: ${props => props.size || "14px"};;
    font-weight: 600;
    color: white;
    /* display: inline-block; */
     transition: all 0.4s linear;
  }
  .donate:hover {
    background-color : #ffffff;
    color:${props => props.color || "#e22d28"};
    border: 2px solid ${props => props.color || "#e22d28"};
  }
`;
const ButtonDonate = ({ children = "Đóng góp", color1, color2, onClick, ...props }) => {
  return (
    <ButtonDonateStyled color={color} color1={color1} color2={color2} onClick={onClick} {...props}>
      <div className={"donate"} onClick={props.onClick}>
        <a className={props.className}>{children}</a>
      </div>
    </ButtonDonateStyled>
  );
};

export default ButtonDonate;
