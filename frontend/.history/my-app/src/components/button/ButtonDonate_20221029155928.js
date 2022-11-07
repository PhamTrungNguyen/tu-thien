import React from 'react';
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
.donate {
  text-transform: uppercase;
  padding: 10px;
  background-color: #e22d28;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
  color: white;
  width: 150px;
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