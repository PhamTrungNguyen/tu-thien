import React from "react";
import InputPost from "../../components/input/InputPost";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BarItem from "../../components/bar/BarItem";
import Field from "../../components/field/Field";
import Label from "../../components/label/Label";
import Toggle from "../../components/toggle/Toggle";
import TextArea from "../../components/input/TextArea";
import UploadImage from "../UploadImage";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AddPost = () => {
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
            title: "",
            desc: "",
            hot: false,
            image_url: "",
            accountId: "",
        },
    });
    console.log("🚀 ~ file: AddPost.js ~ line 43 ~ AddPost ~ isValid", isValid)
    const navigate = useNavigate();
    const watchHot = watch("hot");
    const dataURL = useSelector((count) => count.redux.image_url);
    setValue("image_url", dataURL);
    const user = JSON.parse(localStorage.getItem("userLogin"))
    setValue("accountId", user.id);
    const handleCallAPIAddPost = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            toast.success(`${result.message}`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Thêm bài viết thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    }
    const handleAddPost = (values) => {
        console.log(
            "🚀 ~ file: AddPost.js ~ line 38 ~ handleAddPost ~ values",
            values
        );
        handleCallAPIAddPost("http://localhost:8080/api/post/addPost", values);
        navigate("/quan-ly")


    };

    return (
        <div className="">
            <BarItem text="">Thêm bài viết</BarItem>
            <form
                onSubmit={handleSubmit(handleAddPost)}
                autoComplete="off"
                className="px-[30px]"
            >
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Tiêu đề</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập tiêu đề"
                            name="title"
                        ></InputPost>
                        {errors?.title?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.title?.message}
                            </p>
                        )}
                        <UploadImage></UploadImage>
                        {!getValues("image_url") && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ">
                                Vui lòng chọn hình ảnh
                            </p>
                        )}

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
                        {errors?.desc?.message && (
                            <p className="mt-[-15px] text-[14px] text-red-500 ml-[20px]">
                                {errors?.desc?.message}
                            </p>
                        )}
                    </Field>
                </div>
                <div className="text-center pb-[30px]">
                    <button
                        // disabled={isValid}
                        type="submit"
                        className="cursor-pointer font-medium p-[10px] border-[2px] border-transparent bg-[#00b6f1]  text-white hover:bg-white hover:text-[#00b6f1] hover:border-[#00b6f1] duration-300 text-[15px] text-center rounded-[10px]  w-[150px]"
                    // onClick={() => this.refresh()}
                    >
                        Thêm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
