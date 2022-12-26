import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/Input";
import { useDispatch } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as yup from "yup";
import IconEyeOpen from "../../components/icon/IconEyeOpen";
import IconEyeClose from "../../components/icon/IconEyeClose";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
const SignInPage = () => {
    const user = JSON.parse(localStorage.getItem('userLogin'))
    const [icon, setIcon] = useState(false);
    const [check, setCheck] = useState(false);
    const [userLogin, setUserLogin] = useState({})
    const navigate = useNavigate();
    const schema = yup
        .object({
            signUpName: yup.string().required("Vui lòng nhập vào tài khoản"),
            signUpPass: yup.string().required("Vui lòng nhập vào mật khẩu"),
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
    useEffect(() => {
        if (user?.username) {
            navigate("/")
            window.location.reload();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                navigate('/')

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
        setUserLogin(result);
        // dispatch(getUserLogin(result))
        localStorage.setItem("userLogin", JSON.stringify(result.account));
        return result
    }
    /* ---------------- */
    const handleSignIn = (values) => {
        // console.log("🚀 ~ file: SignInPage.js ~ line 91 ~ handleSignIn ~ values", values)
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
                <div className="title">Đăng nhập</div>
                <Input className="input" name="signUpName" type="text" control={control}>
                    Tài khoản
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
                    Mật khẩu
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
                        Đăng nhập
                    </button>
                </div>
                <div className="cursor-pointer" onClick={() => setCheck(!check)}>

                    <span className="pass-forgot hover:text-black duration-400">
                        Quên mật khẩu?
                    </span>
                </div>
            </form>
            <ForgotPassword open={check}></ForgotPassword>
        </div>
    );
};

export default SignInPage;
