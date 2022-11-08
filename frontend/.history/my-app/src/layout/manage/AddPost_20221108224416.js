import React from "react";
import InputPost from "../../components/input/InputPost";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BarItem from "../../components/bar/BarItem";
const AddPost = () => {
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
    return (
        <div className="">
            <BarItem text="">Thêm bài viết</BarItem>
            <form action="" className="px-[30px]">
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <InputPost
                        control={control}
                        placeholder="Nhập tiêu đề"
                        name="title"
                    ></InputPost>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
