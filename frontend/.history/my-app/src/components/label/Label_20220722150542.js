import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  color: ${(props) => props.theme.black};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
    return (
        <LabelStyle htmlFor={htmlFor} {...props}>
            {children}
        </LabelStyle>
    );
};

export default Label;
