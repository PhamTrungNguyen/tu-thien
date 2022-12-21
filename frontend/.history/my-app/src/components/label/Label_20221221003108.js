import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
    return (
        <LabelStyle htmlFor={htmlFor} >
            <div {...props}>

                {children}
            </div>
        </LabelStyle>
    );
};

export default Label;
