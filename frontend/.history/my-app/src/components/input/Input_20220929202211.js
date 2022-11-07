import React from 'react';
import { useController } from "react-hook-form";
const Input = ({ name, control, children, className, type, ...props }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="input">
            <label >{children}</label>
            <input type={type} name={name} id={name} {...field} {...props} />
            <span className="spin" />
        </div>
    );
};

export default Input;