import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import { useDispatch } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import IconEyeOpen from "../../components/icon/IconEyeOpen";
import IconEyeClose from "../../components/icon/IconEyeClose";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../redux/signPageSlice";
const SignInPage = () => {
    const dispatch = useDispatch();
    const [icon, setIcon] = useState(false);
    const [userLogin, setUserLogin] = useState({})
    const navigate = useNavigate();
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
    async function handleCheck(url, data) {
        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.status === 200) {

                toast.success(`${result.message}`, {
                    pauseOnHover: false,
                    delay: 0,
                    autoClose: 1300,
                });
                navigate('./home')
            }
            else {
                toast.error(`${result.message}`, {
                    pauseOnHover: false,
                    delay: 0,
                    autoClose: 1300,
                });
            }
        } catch (error) {
            toast.error("Đăng nhập thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    }
    /* ----------------- */
    async function handleGetUserLogin(url) {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        });
        const result = await response.json();
        console.log("🚀 ~ file: SignInPage.js ~ line 87 ~ handleGetUserLogin ~ result", result)
        setUserLogin(result);
        return result
    }
    /* ---------------- */
    const handleSignIn = (values) => {
        console.log("🚀 ~ file: SignInPage.js ~ line 91 ~ handleSignIn ~ values", values)
        // dispatch(getUserLogin(values))
        handleCheck("http://localhost:8080/api/auth/login", values)
        handleGetUserLogin(`http://localhost:8080/api/auth/getAccountByUser?username=${values.signUpName}`)
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
