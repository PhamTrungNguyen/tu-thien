import React from 'react';
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
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