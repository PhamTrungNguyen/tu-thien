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
    background-color: #e22d28;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: white;
    /* display: inline-block; */
     transition: all 0.25s linear;
  }
  .donate:hover {
    background-color : #ffffff;
    color:red;
    border: 2px solid #e22d28;
  }
`;
const ButtonDonate = () => {
    return (
        <ButtonDonateStyled>
            <div className="donate">
                <a href="#1">Đóng góp</a>
            </div>
        </ButtonDonateStyled>
    );
};

export default ButtonDonate;
