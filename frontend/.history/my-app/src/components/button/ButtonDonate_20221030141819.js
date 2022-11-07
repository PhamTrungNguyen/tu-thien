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
    background-color: ${props => props.color || COLORHOMEPAGE};;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: white;
    /* display: inline-block; */
     transition: all 0.4s linear;
  }
  .donate:hover {
    background-color : #ffffff;
    color:${props => props.color || COLORHOMEPAGE};
    border: 2px solid ${props => props.color || COLORHOMEPAGE};
  }
`;
const ButtonDonate = ({ children = "Đóng góp", color }) => {
  return (
    <ButtonDonateStyled color={color}>
      <div className="donate">
        <a href="#1">{children}</a>
      </div>
    </ButtonDonateStyled>
  );
};

export default ButtonDonate;
