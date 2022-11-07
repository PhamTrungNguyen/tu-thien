import React from 'react';
import { useController, useForm } from "react-hook-form";
const Input = ({ name, control, children, className }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="input">
            <label htmlFor="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass" />
            <span className="spin" />
        </div>
    );
};

export default Input;