import React from "react";
import InputPost from "../../components/input/InputPost";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BarItem from "../../components/bar/BarItem";
import RadioPost from "../../components/radio/RadioPost";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import Toggle from "../../components/toggle/Toggle";
import TextArea from "../../components/input/TextArea";
import UploadImage from "../UploadImage";
import { useSelector } from "react-redux";
const AddPost = () => {
    // const schema = yup
    //     .object({
    //         signUpName: yup.string().required("Please enter your username"),
    //         signUpPass: yup.string().required("Please enter your password"),
    //     })
    //     .required();
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        // mode: "onChange",
        // resolver: yupResolver(schema),
        defaultValues: {
            title: "",
            desc: "",
            hot: false,
        },
    });
    const watchHot = watch("hot");
    const count = useSelector((count) => count.redux.data_url);

    // console.log("🚀 Data", count)
    const handleAddPost = (values) => {
        setValue("data_url",)
        console.log("🚀 ~ file: AddPost.js ~ line 38 ~ handleAddPost ~ values", values)

    };
    return (
        <div className="">
            <BarItem text="">Thêm bài viết</BarItem>
            <form onSubmit={handleSubmit(handleAddPost)}
                autoComplete="off" className="px-[30px]">

                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Tiêu đề</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập tiêu đề"
                            name="title"
                        ></InputPost>
                        <UploadImage></UploadImage>

                    </Field>
                    <Field>
                        <Label>Nổi bật</Label>
                        <Toggle
                            on={watchHot === true}
                            onClick={() => {
                                setValue("hot", !watchHot);
                            }}
                        ></Toggle>
                        <Label>Nội dung</Label>
                        <TextArea name="desc" control={control}></TextArea>
                    </Field>
                </div>
                <div className="button w-[200px] ml-[200px]">
                    <button
                        // disabled={!isValid}
                        type="submit"
                        className="hover:text-[#ed2553] hover:border-[#ed2553] duration-300 "
                    >
                        Thêm
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddPost;
