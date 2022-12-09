import React from 'react';
import { useForm } from 'react-hook-form';
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
    return (
        <div>

        </div>
    );
};

export default ReviewPost;