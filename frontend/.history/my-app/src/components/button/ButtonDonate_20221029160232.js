import React from 'react';
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
.donate {
  text-transform: uppercase;
  padding:5px 20px;
  background-color: #e22d28;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: white;
  display: inline-block;
   position: relative;
   right:0;
  /* width: 150px; */
}
`
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