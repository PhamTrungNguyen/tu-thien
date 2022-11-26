import React from 'react';
import BarItem from '../../components/bar/BarItem';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from '../../components/field/Field';
import Label from '../../components/label/Label';
import InputPost from '../../components/input/InputPost';
import ButtonDonate from '../../components/button/ButtonDonate';
const UpdateUser = () => {
    const schema = yup
        .object({
            title: yup.string().required("Vui lòng nhập vào tiêu đề"),
            desc: yup.string().required("Vui lòng nhập vào nội dung"),
            image_url: yup.string().required("Vui lòng chọn hình ảnh"),
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

        },
    });
    const handleAddPost = (values) => {
        console.log(
            "🚀 ~ file: AddPost.js ~ line 38 ~ handleAddPost ~ values",
            values
        );



    };
    return (
        <div>
            <BarItem text="">Cập nhập tài khoản</BarItem>
            <form onSubmit={handleSubmit(handleAddPost)}
                autoComplete="off"
                className="px-[30px]">
                <div className="grid grid-cols-2 gap-x-10 ">
                    <Field>
                        <Label>Tài khoản</Label>
                        <InputPost
                            control={control}
                            name="account"
                            value="123"
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
                        <Label>Loại tài khoản</Label>
                        <InputPost
                            control={control}
                            name="role"
                            value="Quản lý"
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

                        ></InputPost>
                        {/* {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )} */}
                    </Field>
                </div>
                <div className="">
                    <div>
                        <Label>Số tiền</Label>
                        <InputPost
                            control={control}
                            name="money"
                            value={0}
                            className=""
                            disabled="disabled"

                        ></InputPost>
                        <ButtonDonate></ButtonDonate>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default UpdateUser;