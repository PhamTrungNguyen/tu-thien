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
            <label htmlFor="reregpass">Repeat Password</label>
            <input type={type} name={name} id={name} {..field} />
            <span className="spin" />
        </div>
    );
};

export default Input;