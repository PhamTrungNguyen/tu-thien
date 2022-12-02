import React from "react";
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  .donate {
    text-transform: uppercase;
    border: 2px solid #ffffff;
    padding: 5px 20px;
    background-color: ${props => props.color || "#e22d28"};;
    text-align: center;
    font-size: 14px;
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
const ButtonDonate = ({ children = "Đóng góp", color, onClick, ...props }) => {
  return (
    <ButtonDonateStyled color={color} onClick={onClick}  >
      <div className={props.className} onClick={props.onClick}>
        <a href="#1">{children}</a>
      </div>
    </ButtonDonateStyled>
  );
};

export default ButtonDonate;
