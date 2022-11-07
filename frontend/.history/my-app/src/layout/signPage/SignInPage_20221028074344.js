import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import InputPassword from "../../components/input/InputPassword";
import IconEyeOpen from "../../components/icon/IconEyeOpen";
import IconEyeClose from "../../components/icon/IconEyeClose";
const SignInPage = () => {
    const [icon, setIcon] = useState(false);

    const schema = yup
        .object({
            signUpName: yup.string().required("Please enter your username"),
            signUpPass: yup.string().required("Please enter your password"),
        })
        .required();
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            signUpName: "",
            signUpPass: "",
        },
    });
    /* ----------------- */
    const handleSignIn = (values) => {
        console.log(values);
        toast.success("Welcome Project !!!", {
            pauseOnHover: false,
            delay: 0,
        });
        if (values.signUpName == "admin" && values.signUpPass == "admin") {

        }
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(handleSignIn)}
                autoComplete="off"
                className="box"
            >
                <div className="title">LOGIN</div>
                <Input className="input" name="signUpName" type="text" control={control}>
                    Username
                </Input>
                {errors?.signUpName?.message && (
                    <p className="font-semibold text-[16px] absolute z-10 top-[210px] left-[50px] text-red-700 ">
                        {errors?.signUpName?.message}
                    </p>
                )}
                <Input
                    className="input"
                    name="signUpPass"
                    type={`${!icon ? "password" : "text"}`}
                    control={control}
                >
                    Password
                </Input>
                {icon ? (
                    <IconEyeOpen
                        onClick={() => {
                            setIcon(!icon);
                        }}
                        className=" absolute top-[54%] right-[10%] z-10"
                    ></IconEyeOpen>
                ) : (
                    <IconEyeClose
                        onClick={() => {
                            setIcon(!icon);
                        }}
                        className=" absolute top-[53%] right-[10%] z-10"
                    ></IconEyeClose>
                )}
                {errors?.signUpPass?.message && (
                    <p className="font-semibold text-[16px] absolute z-10 top-[310px] left-[50px] text-red-700 ">
                        {errors?.signUpPass?.message}
                    </p>
                )}

                <div className="button login">
                    <button
                        disabled={!isValid}
                        type="submit"
                        className={`${!isValid && "opacity-20"} ${isValid && "hover:text-[#ed2553] hover:border-[#ed2553]"
                            } `}
                    >
                        GO
                    </button>
                </div>
                <a href="#1" className="pass-forgot">
                    Forgot your password?
                </a>
            </form>
        </div>
    );
};

export default SignInPage;
