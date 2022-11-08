import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    background-color: ${(props) => props.theme.backgroundInput};
    border-radius: 8px;
    font-weight: 500;
    color: black;
    transition: all 0.25s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primaryColor};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
const Input = ({
    name = "",
    type = "text",
    children,
    control,
    ...props
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <InputStyled hasIcon={children ? true : false}>
            <input id={name} type={type} {...field} {...props} />
            {children}
        </InputStyled>
    );
};

export default Input;
