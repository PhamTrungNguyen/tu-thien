import React from 'react';
import { useController, useForm } from "react-hook-form";
const Input = ({ name, control, }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div>

        </div>
    );
};

export default Input;