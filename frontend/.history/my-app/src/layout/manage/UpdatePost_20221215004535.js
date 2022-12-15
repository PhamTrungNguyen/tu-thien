import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as yup from "yup";
import BarItem from '../../components/bar/BarItem';
import Field from '../../components/field/Field';
import InputPost from '../../components/input/InputPost';
import TextArea from '../../components/input/TextArea';
import Label from '../../components/label/Label';
import Toggle from '../../components/toggle/Toggle';
import UploadImage from '../UploadImage';
const UpdatePost = () => {
    const [post, setPost] = useState();

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
            title: post?.title,
            desc: "",
            hot: false,
            image_url: "",
            accountId: "",
        },
    });
    const navigate = useNavigate();
    console.log("🚀 ~ file: UpdatePost.js:42 ~ UpdatePost ~ post", post)

    const [params] = useSearchParams()
    const postId = params.get("id");
    console.log("🚀 ~ file: UpdatePost.js:43 ~ UpdatePost ~ param", postId)
    async function handleGet(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    }
    useEffect(() => {
        const getPostById = async () => {
            let kq = await handleGet(
                `http://localhost:8080/api/post/getPostById?idPost=${postId}`
            );
            setPost(kq)
        }
        getPostById()
    }, [postId])
    return (
        <div className="">
            <BarItem text="">Sửa bài viết</BarItem>
            <form
                // onSubmit={handleSubmit(handleAddPost)}
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
                        // on={watchHot === true}
                        // onClick={() => {
                        //     setValue("hot", !watchHot);
                        // }}
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

export default UpdatePost;