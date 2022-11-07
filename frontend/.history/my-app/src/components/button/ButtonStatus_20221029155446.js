import React from 'react';
import styled from "styled-components";
const ButtonStatusStyled = styled.div`
.status {
  text-transform: uppercase;
  padding: 10px 15px;
  background-color: #e22d28;
  position: absolute;
  bottom: 20px;
  right: -10px;
  font-size: 15px;
  font-weight: 600;
  color: white;
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
const ButtonStatus = () => {
    return (
        <ButtonStatusStyled>
            <div className="status">Đang vận động</div>
        </ButtonStatusStyled>
    );
};

export default ButtonStatus;