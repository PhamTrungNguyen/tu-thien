import React from 'react';
import { useController, useForm } from "react-hook-form";
const Input = ({ name, control, children, className, type, ...props }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="input">
            <label htmlFor={name}>Repeat Password</label>
            <input type={type} name={name} id={name} {...field} {...props} />
            <span className="spin" />
        </div>
    );
};

export default Input;