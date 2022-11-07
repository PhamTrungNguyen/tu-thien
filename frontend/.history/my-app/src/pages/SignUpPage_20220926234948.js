import React from "react";
import styled from "styled-components";

const SignUpStyled = styled.div`
  $width: 600px;
  $height: 320px;
  $padding: 10px 15px;
  .table {
    display: table;
    width: 100%;
    height: 100%;
  }
  .table-cell {
    display: table-cell;
    vertical-align: middle;
    transition: all 0.25s linear;
  }
  .container {
    position: relative;
    width: $width;
    margin: 30px auto 0;
    height: $height;
    background-color: #999ede;
    top: 50%;
    margin-top: -160px;
  }
  .box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:before,
    &:after {
      content: " ";
      position: absolute;
      left: 152px;
      top: 50px;
      background-color: #9297e0;
      transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);
      width: 300px;
      height: 285px;
      transition: all 0.25s linear;
    }
    &:after {
      background-color: #a5aae4;
      top: -10px;
      left: 80px;
      width: 320px;
      height: 180px;
    }
  }
  .container-forms {
    position: relative;
  }
  .btn {
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    width: 60px;
    color: #fff;
    background-color: #ff73b3;
    opacity: 1;
    transition: all 0.25s linear;
    &:hover {
      opacity: 0.7;
    }
  }
  .btn,
  input {
    padding: $padding;
  }
  input {
    margin: 0 auto 15px;
    display: block;
    width: $width/2-80px;
    transition: all 0.25s linear;
  }

  .container-info {
    .info-item {
      text-align: center;
      font-size: 16px;
      width: $width/2;
      height: $height;
      display: inline-block;
      vertical-align: top;
      color: #fff;
      opacity: 1;
      transition: all 0.25s linear;
      p {
        margin: 20px;
        font-size: 20px;
      }
      text-align: left;
      font-size: 0;
      .btn {
        background-color: transparent;
        border: 1px solid #fff;
        .table-cell {
          padding-right: 35px;
          &:nth-child(2) {
            .table-cell {
              padding-left: 35px;
              padding-right: 0;
            }
          }
        }
      }
    }
  }
  .container-form {
    overflow: hidden;
    position: absolute;
    left: 30px;
    top: -30px;
    width: 305px;
    height: $height + 60px;
    background-color: #fff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.25s linear;
    &:before {
      position: absolute;
      left: 160px;
      top: -50px;
      color: #5356ad;
      font-size: 130px;
      opacity: 0;
      transition: all 0.25s linear;
      content: "✔";
    }
    .btn
    {
        position: relative;
        box-shadow: 0 0 10px 1px #ff73b3;
        margin-top: 30px;
    }
  }
  .form-item
  {

 
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
     transition: all 0.25s linear;
    &.sign-up
    {

        position: absolute;
        left: -100%;
        opacity: 0;
    }
  &.log-in
  {
    .box
    {

  
      &:before
      {

     
        position: absolute;
        left: 180px;
        top: 62px;
        height: 265px;
    }
      &:after
      {

          top: 22px;
          left: 192px;
          width: 324px;
          height: 220px;
        }
    .container-form
      left: 265px
      .form-item
        &.sign-up
          left: 0
          opacity: 1
        &.log-in
          left: -100%
          opacity: 0
        }
        }
  &.active
    width: 260px
    height: 140px
    margin-top: -70px
    .container-form
      left: 30px
      width: 200px
      height: 200px
      &:before
        content: "✔"
        position: absolute
        left: 51px
        top: 5px
        color: #5356ad
        font-size: 130px
        opacity: 1
    input, .btn, .info-item
      display: none
      opacity: 0
      padding: 0px
      margin: 0 auto
      height: 0
    .form-item
      height: 100%
    .container-forms
      .container-info
        .info-item
          height: 0%
          opacity: 0
        }
`;
const SignUpPage = () => {
    return (
        <SignUpStyled>
            <div className="container">
                <div className="box"></div>
                <div className="container-forms">
                    <div className="container-info">
                        <div className="info-item">
                            <div className="table">
                                <div className="table-cell">
                                    <p>Have an account?</p>
                                    <div className="btn">Log in</div>
                                </div>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="table">
                                <div className="table-cell">
                                    <p>Don't have an account? </p>
                                    <div className="btn">Sign up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-form">
                        <div className="form-item log-in">
                            <div className="table">
                                <div className="table-cell">
                                    <input name="Username" placeholder="Username" type="text" />
                                    <input
                                        name="Password"
                                        placeholder="Password"
                                        type="Password"
                                    />
                                    <div className="btn">Log in</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-item sign-up">
                            <div className="table">
                                <div className="table-cell">
                                    <input name="email" placeholder="Email" type="text" />
                                    <input name="fullName" placeholder="Full Name" type="text" />
                                    <input name="Username" placeholder="Username" type="text" />
                                    <input
                                        name="Password"
                                        placeholder="Password"
                                        type="Password"
                                    />
                                    <div className="btn">Sign up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SignUpStyled>
    );
};

export default SignUpPage;
