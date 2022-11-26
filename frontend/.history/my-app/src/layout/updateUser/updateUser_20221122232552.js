import React from 'react';
import BarItem from '../../components/bar/BarItem';

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
            title: "",
            desc: "",
            hot: false,
            image_url: "",
            accountId: "",
            myColData: [],
        },
    });
    return (
        <div>
            <BarItem text="">Cập nhập tài khoản</BarItem>

        </div>
    );
};

export default UpdateUser;