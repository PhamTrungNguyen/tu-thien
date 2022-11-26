import React from 'react';
import BarItem from '../../components/bar/BarItem';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
    return (
        <div>
            <BarItem text="">Cập nhập tài khoản</BarItem>
            <form action=""></form>
        </div>
    );
};

export default UpdateUser;