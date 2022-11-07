import React from 'react';
import { useController, useForm } from "react-hook-form";
const Input = () => {
    const { field } = useController({
        name,
        control,
        rules: { required: true },
        defaultValue: "",
    });
    return (
        <div>

        </div>
    );
};

export default Input;