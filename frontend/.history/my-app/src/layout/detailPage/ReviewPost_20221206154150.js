import React from 'react';
import * as yup from "yup";

const ReviewPost = () => {
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const schema = yup
        .object({
            text: yup.string().required("Vui lòng nhập vào nội dung"),
            review: yup.string().required("Vui lòng nhập vào nội dung"),
        })
        .required();

    return (
        <div>

        </div>
    );
};

export default ReviewPost;