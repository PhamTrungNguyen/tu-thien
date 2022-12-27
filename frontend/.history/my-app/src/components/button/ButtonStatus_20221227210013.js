import React from 'react';
import styled from "styled-components";
const ButtonStatusStyled = styled.div`
.status {
  text-transform: uppercase;
  padding: 10px 15px;
  /* background-color: ${props => props.color || "#e22d28"}; */
  background-image: linear-gradient(to bottom, ${props => props.color1 || "#e22d28"}, ${props => props.color2 || "#e22d28"});
  position: absolute;
  bottom: 20px;
  right: -10px;
  font-size: 15px;
  font-weight: 600;
  color: white;
   transition: all 0.3s linear;
}
.status:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid black;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
  border-top: 5px solid transparent;
  position: absolute;
  right: 0;
  top: -10px;
}`
const ButtonStatus = ({ children = "Đang vận động", color1, color2 }) => {
  return (
    <ButtonStatusStyled color1={color1} color2={color2} >
      <div className="status">{children}</div>
    </ButtonStatusStyled>
  );
};

export default ButtonStatus;