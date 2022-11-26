import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding:  10px 20px;
    background-color:#E7ECF3;
    border-radius: 8px;
    font-weight: 500;
    color: black;
    transition: all 0.25s linear;
    border: 1px solid transparent;
  }
  input:focus {
    background-color: white;
    border-color: #2EBAC1;
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
`;
const InputPost = ({
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  console.log("🚀 ~ file: InputPost.js ~ line 36 ~ props", props)
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  // console.log("🚀 ~ file: InputPost.js ~ line 41 ~ field", field)
  return (
    <InputStyled >
      <input id={name} type={type} {...field} {...props} />
      {children}
    </InputStyled>
  );
};

export default InputPost;
