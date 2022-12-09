import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from "yup";
import TextArea from '../../components/input/TextArea';

const ReviewPost = (idPost) => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const userId = userLocal?.id;
    const [postComment, setPostComment] = useState("");
    const [comment, setComment] = useState("");
    console.log("🚀 ~ file: ReviewPost.js:14 ~ ReviewPost ~ comment", comment)

    const schema = yup
        .object({
            review: yup.string().required("Vui lòng nhập vào nội dung"),
        })
        .required();
    const { control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        reset,
        formState: { errors, isValid, isSubmitting }, } = useForm({
            mode: "onChange",
            resolver: yupResolver(schema)
        })
    /* --------------- */
    async function handleGetCommentIDByPostID(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        setPostComment(result);
    }
    /* --------------- */
    async function handleGetCommentByCommentId(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result[0];
    }
    const handleAddComment = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            toast.success(`Đánh giá bài viết thành công`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Đánh giá bài viết thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    const submitReviewForm = (values) => {
        setValue("userId", userId);
        const newValue = { ...values };
        newValue.userId = getValues("userId");
        newValue.postId = idPost.idPost;
        newValue.hot = true;
        console.log(newValue);
        if (userLocal !== "") {
            if (comment.length > 0) {
                toast.error("Bài viết chỉ được đánh giá 1 lần", {
                    pauseOnHover: false,
                    delay: 0,
                    autoClose: 1300,
                });
            }
            else {
                handleAddComment(
                    "http://localhost:8080/api/comment/addComment",
                    newValue
                );
            }
        } else {
            toast.error("Vui lòng đăng nhập để đánh giá", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
        setTimeout(() => (window.location.href = window.location.href), 1000);
    };
    useEffect(() => {
        handleGetCommentIDByPostID(
            `http://localhost:8080/api/comment/getCommentIDByPostID?postId=${idPost.idPost}`
        );
    }, [idPost.idPost]);
    useEffect(() => {
        const getDonate = async () => {
            let data = []
            if (postComment?.length > 0) {
                const kq = await Promise.all(
                    postComment.map(async (item) => {
                        return await handleGetCommentByCommentId(
                            `http://localhost:8080/api/comment/getCommentByCommentIDAndHot?commentId=${item.commentId}`
                        );
                    })
                );
                data = kq.filter(function (element) {
                    return element !== undefined;
                });
                setComment(data);
            }
        };
        getDonate();
    }, [postComment]);
    return (
        <div>
            <div className="reviews py-[40px]">
                <h3 className="text-[20px] font-semibold ">
                    Kết quả đánh giá thiện nguyện
                </h3>
                <div className="border-[1px] p-[10px] mb-[20px] h-[100px] overflow-auto">

                </div>
                <form onSubmit={handleSubmit(submitReviewForm)} action="">
                    <TextArea
                        placeholder="Nhập đánh giá tại đây."
                        height="70px"
                        padding="10px"
                        name="review"
                        control={control}
                    ></TextArea>
                    <button className="px-[10px] py-[5px] bg-[#e22d28] text-center rounded-[5px] text-white font-medium">
                        Viết đánh giá
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ReviewPost;