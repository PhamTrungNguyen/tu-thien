import React, { useEffect } from "react";
import styled from "styled-components";
import "../css/signUpCSS.css"
import "../js/SignUpJS"
const TextStyled = styled.div`
  font-family: 'Alkalami', serif;

  h2{
    font-size: 5rem;
  }
`

const SignUpPage = () => {

    return (
        <div>
            {/* <TextSignUp></TextSignUp> */}
            <TextStyled>
                <h2 >Chào mừng các bạn đến với dự án "Grap Thiện Nguyện"</h2>
            </TextStyled>
            {/* --------------------------- */}
            <div className="materialContainer">
                <div className="box">
                    <div className="title">LOGIN</div>
                    <div className="input">
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" id="name" />
                        <span className="spin" />
                    </div>
                    <div className="input">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" />
                        <span className="spin" />
                    </div>
                    <div className="button login">
                        <button><span>GO</span> <i className="fa fa-check" /></button>
                    </div>
                    <a href className="pass-forgot">Forgot your password?</a>
                </div>
                <div className="overbox">
                    <div className="material-button alt-2 "><span className="shape" /></div>
                    <div className="title mt-[-40px]">REGISTER</div>
                    <div className="input">
                        <label htmlFor="regname">Username</label>
                        <input type="text" name="regname" id="regname" />
                        <span className="spin" />
                    </div>
                    <div className="input">
                        <label htmlFor="regpass">Password</label>
                        <input type="password" name="regpass" id="regpass" />
                        <span className="spin" />
                    </div>
                    <div className="input">
                        <label htmlFor="reregpass">Repeat Password</label>
                        <input type="password" name="reregpass" id="reregpass" />
                        <span className="spin" />
                    </div>
                    <div className="input">
                        <div className="flex">
                            <div >
                                <input type="radio" className="" id="user" name="role" value="user" />
                                <label for="user" className="pl-[20px]">user</label>
                            </div>
                            <div className="ml-[150px]">
                                <input type="radio" id="admin" name="role" value="admin" />
                                <label for="admin" className="ml-[185px]">admin</label>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button><span>NEXT</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TextSignUp = () => {
    return (
        <div className="relative mt-[100px]">
            {/* Hello world */}
            <div class="container ">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter w-[500px] absolute left-0 break-words"> Chào mừng các bạn đến với dự án "Grap thiện nguyện"</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUpPage;