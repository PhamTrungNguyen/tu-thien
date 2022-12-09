import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from "yup";

const ReviewPost = () => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const schema = yup
        .object({
            text: yup.string().required("Vui lòng nhập vào nội dung"),
            review: yup.string().required("Vui lòng nhập vào nội dung"),
        })
        .required();
    const { } = useForm()
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
            toast.success(`${result.message}`, {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        } catch (error) {
            toast.error("Bình luận thất bại", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
    };
    const submitReviewForm = (values) => {
        setValue("userId", userId);
        setValue("postId", idPost);
        const newValue = { ...values };
        newValue.userId = getValues("userId");
        newValue.postId = getValues("postId");
        newValue.hot = true;
        console.log(newValue);
        if (userLocal !== "") {
            handleAddComment(
                "http://localhost:8080/api/comment/addComment",
                newValue
            );
        } else {
            toast.error("Vui lòng đăng nhập để đánh giá", {
                pauseOnHover: false,
                delay: 0,
                autoClose: 1300,
            });
        }
        setTimeout(() => (window.location.href = window.location.href), 1000);
    };
    return (
        <div>

        </div>
    );
};

export default ReviewPost;