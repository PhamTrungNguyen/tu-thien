import React, { useEffect } from "react";
import styled from "styled-components";
import "../css/signUpCSS.css";
import "../js/SignUpJS";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/input/Input";
import SignUpPage from "../layout/signPage/SignUpPage";
import SignInPage from "../layout/signPage/SignInPage";
import { toast } from "react-toastify";
const TextStyled = styled.div`
  font-family: "Dancing Script", cursive;
  margin-top: 370px;
  margin-left: 70px;
  max-width: 600px;
  text-align: center;
  position: relative;
  z-index: 100;
  font-size: 55px;
  transform: rotate(-10deg);
  animation-name: text;
  animation-duration: 6s;
  /* @keyframes text {
    to {
      transform: rotate(-10deg) translateX(0%);
    }
    from {
      transform: rotate(-10deg) translateX(-100%);
    }
    i {
      overflow-wrap: break-word;
      word-break: normal;
      font-size: 70px;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
    }
  } */
  .blur {
    background-color: white;
    width: 650px;
    height: 200px;
    position: absolute;
    top: -50px;
    left: -20px;
    z-index: -10;
    opacity: 0.7;
  }
`;

const SignPage = () => {


  return (
    <div>
      {/* <TextSignUp></TextSignUp> */}
      <TextStyled>
        {/* <div className="blur"></div> */}
        <i>"Lan Tỏa Yêu Thương!"</i>
      </TextStyled>
      {/* --------------------------- */}
      <div className="image">
        <div className="materialContainer">
          <SignUpPage></SignUpPage>
          <SignInPage></SignInPage>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
