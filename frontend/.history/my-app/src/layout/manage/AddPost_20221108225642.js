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
    const watchHot = watch("hot");
    return (
        <div className="">
            <BarItem text="">Thêm bài viết</BarItem>
            <form action="" className="px-[30px]">
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Tiêu đề</Label>
                        <InputPost
                            control={control}
                            placeholder="Nhập tiêu đề"
                            name="title"
                        ></InputPost>
                    </Field>
                    <Field>
                        <Label>Tiêu đề</Label>
                        <Toggle
                            on={watchHot === true}
                            onClick={() => {
                                setValue("hot", !watchHot);
                            }}
                        ></Toggle>
                    </Field>
                </div>
                {/* <div className="flex items-center gap-x-5">
                    <RadioPost name="status" control={control} value={1} checked={true}>
                        Đang vận động
                    </RadioPost>
                    <RadioPost name="status" control={control} value={1} checked={true}>
                        Đang vận động
                    </RadioPost>
                    <RadioPost name="status" control={control} value={1} checked={true}>
                        Đang vận động
                    </RadioPost>
                </div> */}
            </form>
        </div>
    );
};

export default AddPost;
