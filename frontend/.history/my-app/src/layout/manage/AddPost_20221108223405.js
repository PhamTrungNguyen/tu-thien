
import React from 'react';
import InputPost from '../../components/input/InputPost';

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
    return (
        <div>
            <InputPost></InputPost>
        </div>
    );
};

export default AddPost;