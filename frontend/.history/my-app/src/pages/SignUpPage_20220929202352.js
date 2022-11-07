import React, { useEffect } from "react";
import styled from "styled-components";
import "../css/signUpCSS.css";
import "../js/SignUpJS";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/input/Input";
import SignInPage from "./SignInPage";
const TextStyled = styled.div`
  font-family: "Dancing Script", cursive;
  margin-top: 240px;
  margin-left: 70px;
  max-width: 550px;
  text-align: center;
  position: relative;
  z-index: 100;
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
  .blur {
    background-color: white;
    width: 600px;
    height: 200px;
    position: absolute;
    top: -20px;
    left: -20px;
    z-index: -10;
    opacity: 0.7;
  }
`;

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        formState: { isSubmitting, errors, isValid },
    } = useForm({
        mode: "onChange",
    });
    /* ----------------- */
    const handleSignIn = (values) => {
        console.log(values)
    }
    const handleSignUp = (values) => {
        console.log(values)
    }
    return (
        <div>
            {/* <TextSignUp></TextSignUp> */}
            <TextStyled>
                <div className="blur"></div>
                <i>"Cho đi là nhận lại!"</i>
            </TextStyled>
            {/* --------------------------- */}
            <div className="image">
                <div className="materialContainer">
                    <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off" className="box">
                        <div className="title">LOGIN</div>
                        <Input className="input" name="name" type="text" control={control}>
                            Username
                        </Input>
                        <Input className="input" name="password" type="password" control={control}>
                            Password
                        </Input>
                        <div className="button login">
                            <button type="submit">
                                <span>GO</span> <i className="fa fa-check" />
                            </button>
                        </div>
                        <a href="#1" className="pass-forgot">
                            Forgot your password?
                        </a>
                    </form>
                    <SignInPage></SignInPage>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
