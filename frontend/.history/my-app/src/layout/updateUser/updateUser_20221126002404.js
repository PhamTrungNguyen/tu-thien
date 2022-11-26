import React, { useEffect, useState } from "react";
import BarItem from "../../components/bar/BarItem";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import InputPost from "../../components/input/InputPost";
import ButtonDonate from "../../components/button/ButtonDonate";
import FormDialog from "./Money";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const UpdateUser = () => {
    var nf = new Intl.NumberFormat();
    const [account, setAccount] = useState();
    const accountMoney = account?.totalMoney;
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const money = useSelector((count) => count.redux.money);
    const [check, setCheck] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [displayName, setDisplayName] = useState("");
    console.log("🚀 ~ file: updateUser.js ~ line 24 ~ UpdateUser ~ displayName", displayName)
    const [email, setEmail] = useState("");
    const newMoney = (parseInt(money.replace(/,/g, "") || 0) + parseInt(accountMoney)).toString();
    async function handleGetAccountByID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setAccount(result);
    }
    useEffect(() => {
        handleGetAccountByID(
            `http://localhost:8080/api/auth/getAccountByID?accountId=${user?.id}`
        );
    }, [user?.id]);
    const schema = yup
        .object({
            displayName: yup.string().required("Vui lòng nhập vào tên hiển thị"),
            email: yup.string().email().required("Vui lòng nhập vào email"),
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
            username: user?.username,
            roleId: user?.roleId,
            displayName: "",
            email: "",
        },
    });
    useEffect(() => {
        if (user?.roleId === 1) {
            setUserRole("Người dùng");
        }
        if (user?.roleId === 2) {
            setUserRole("Quản lý");
        }
        if (user?.roleId === 3) {
            setUserRole("Quản trị viên");
        }
    }, [user]);
    useEffect(() => {
        if (!user) {
            navigate("/")
            const reloadUsingLocationHash = () => {
                window.location.hash = "reload";
            }
            window.onload = reloadUsingLocationHash();
        }
    })
    const handleCallAPIAddPost = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            toast.success(`${result.message}`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Cập nhập tài khoản thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    const handleAddPost = (values) => {
        const newValue = { ...values };
        console.log(document.getElementById("displayName").value);
        var unformatted = newMoney.replace(/,/g, "")
        console.log("123123123213123", unformatted)
        newValue.totalMoney = unformatted;
        newValue.username = user?.username;
        newValue.roleId = user?.roleId;
        newValue.displayName = displayName || user?.displayName;
        newValue.email = email || user?.email;
        newValue.id = user?.id;
        console.log(
            "🚀 ~ file: updateuser?.js ~ line 57 ~ handleAddPost ~ newValue",
            newValue
        );
        handleCallAPIAddPost(
            `http://localhost:8080/api/auth/UpdateAccountByUser?idAccount=${user?.id}`,
            newValue
        );
        localStorage.setItem("userLogin", JSON.stringify(newValue));
    };
    return (
        <div>
            <BarItem text="">Cập nhập tài khoản</BarItem>
            <form
                onSubmit={handleSubmit(handleAddPost)}
                autoComplete="off"
                className="px-[30px]"
            >
                <div className="grid grid-cols-2 gap-x-10 ">
                    <Field>
                        <Label color="red">Tài khoản</Label>
                        <InputPost
                            control={control}
                            name="username"
                            value={user?.username}
                            className=""
                            disabled="disabled"
                        ></InputPost>
                        {/* {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )} */}
                    </Field>
                    <Field>
                        <Label color="red">Loại tài khoản</Label>
                        <InputPost
                            control={control}
                            name="roleId"
                            value={userRole}
                            className=""
                            disabled="disabled"
                        ></InputPost>
                        {/* {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )} */}
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                    <Field>
                        <Label>Tên hiển thị</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập tên hiển thị"
                            name="displayName"
                            className=""
                            value={displayName || user?.displayName}
                            onChange={(e) => {
                                if (!displayName) { }
                                setDisplayName(e.target.value)
                            }
                            }
                        ></InputPost>
                        {/* {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )} */}
                    </Field>
                    <Field>
                        <Label>Email</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập email"
                            name="email"
                            className=""
                            value={email || user?.email}
                            onChange={(e) => setEmail(e.target.value)}
                        // value={user?.email || ""}
                        ></InputPost>
                        {/* {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )} */}
                    </Field>
                </div>
                <div className="flex items-center ">
                    <Field>
                        <Label color="red">Số tiền</Label>
                        <InputPost
                            control={control}
                            name="totalMoney"
                            value={`${nf.format(newMoney?.replace(/\$|,|\./g, ""))

                                } VNĐ`}
                            className=""
                            disabled="disabled"
                        ></InputPost>
                    </Field>
                    <div className="ml-[20px] mb-[15px]" onClick={() => setCheck(!check)}>
                        <FormDialog open={check}></FormDialog>
                    </div>
                </div>
                <div className="text-center pb-[30px]">
                    <button
                        // disabled={isValid}
                        type="submit"
                        className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#00b6f1]  text-white hover:bg-white hover:text-[#00b6f1] hover:border-[#00b6f1] duration-300 text-[15px] text-center rounded-[10px]  w-[150px]"
                    // onClick={() => this.refresh()}
                    >
                        Cập nhập
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
