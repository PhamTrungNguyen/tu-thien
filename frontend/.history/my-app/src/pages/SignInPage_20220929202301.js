import React from 'react';
import "../css/signUpCSS.css";
import "../js/SignUpJS";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/input/Input";
const SignInPage = () => {
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
            <form onSubmit={handleSubmit(handleSignUp)} autoComplete="off" className="overbox">
                <div className="material-button alt-2 ">
                    <span className="shape" />
                </div>
                <div className="title mt-[-40px]">REGISTER</div>
                <Input className="input" name="regname" type="text" control={control}>
                    Username
                </Input>
                <Input className="input" name="regpass" type="password" control={control}>
                    Password
                </Input>
                <Input className="input" name="reregpass" type="password" control={control}>
                    Repeat Password
                </Input>
                <div className="input">
                    <div className="flex">
                        <div>
                            <input
                                type="radio"
                                className=""
                                id="user"
                                name="role"
                                value="user"
                            />
                            <label htmlFor="user" className="pl-[20px]">
                                user
                            </label>
                        </div>
                        <div className="ml-[150px]">
                            <input type="radio" id="admin" name="role" value="admin" />
                            <label htmlFor="admin" className="ml-[185px]">
                                admin
                            </label>
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">
                        <span>NEXT</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInPage;