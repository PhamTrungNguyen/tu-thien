import React from "react";
import InputPost from "../../components/input/InputPost";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
        <div className="p-[20px]">
            <h2 className="text-[20px] font-semibold pb-[20px[">Thêm bài viết</h2>
            <div className="grid grid-cols-2 gap-x-10 mb-10">
                <InputPost
                    control={control}
                    placeholder="Enter your title"
                    name="title"
                ></InputPost>
            </div>
        </div>
    );
};

export default AddPost;
