import React from 'react';
import styled from "styled-components";
const ButtonDonateStyled = styled.div`
.donate {
    background-color:
#e22b26
border-color:
#ffffff
border-style:
solid
border-width:
2px
color:
#ffffff
display:
inline-block
font-family:
Open Sans
font-size:
14px
font-weight:
600
line-height:
24px
padding:
5px 20px
text-align:
center
text-transform:
uppercase
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