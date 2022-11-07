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
  .container-forms
  {

      .container-info
      text-align: left
      font-size: 0
      .info-item
      text-align: center
      font-size: 16px
      width: $width/2
      height: $height
      display: inline-block
      vertical-align: top
      color: #fff
        opacity: 1
        @include transition(all 0.3s)
        p
          font-size: 20px
          margin: 20px
        .btn
        background-color: transparent
        border: 1px solid #fff
        .table-cell
        padding-right: 35px
        &:nth-child(2)
        .table-cell
        padding-left: 35px
        padding-right: 0
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
