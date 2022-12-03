import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  textarea {
    width: 100%;
    padding:  20px;
    background-color:#E7ECF3;
    border-radius: 8px;
    font-weight: 500;
    color: black;
    transition: all 0.25s linear;
    border: 1px solid transparent;
    resize: none;
    min-height: 200px;
  }
  textarea:focus {
    background-color: white;
    border-color: #2EBAC1;
  }
  textarea::-webkit-input-placeholder {
    color: #84878b;
  }
  textarea::-moz-input-placeholder {
    color: #84878b;
  }

`;
const TextArea = ({
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
    <InputStyled >
      <textarea id={name} type={type} {...field} {...props} />
      {children}
    </InputStyled>
  );
};

export default TextArea;
