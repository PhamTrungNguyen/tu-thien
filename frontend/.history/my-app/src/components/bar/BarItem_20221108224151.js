import React from 'react';
import styled from "styled-components";

const BarItemStyled = styled.div`
.bar-item_text:before {
  content: " ";
  border-bottom: 2px solid #dddddd;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}`
const BarItem = ({ children, text = "CÁC DỰ ÁN HỖ TRỢ" }) => {
    return (
        <BarItemStyled>
            <div className="bar-item p-[30px]">
                <div className="bar-item_text relative pb-[10px]">
                    <h4 className="text-[28px] font-[400] text-[#004256] leading-[40px]">
                        {text + ""}<strong className="font-[600] uppercase">{children}</strong>
                    </h4>
                </div>
            </div>
        </BarItemStyled>
    );
};

export default BarItem;