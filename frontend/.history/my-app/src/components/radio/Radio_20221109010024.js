import React from 'react';
import { useController } from 'react-hook-form';

const Radio = ({ control, children, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: "",
    });
    return (
        <div className="flex items-center gap-x-3 cursor-pointer">
            <input
                onChange={(e) => { }}
                checked={props.checked}
                type="radio"
                ref={props.ref}
                value={props.value}
                className="top-0"
                id={props.value}
                {...field}
                {...props}
            />

            <label className="text-[21px] static" htmlFor={props.value}>
                {children}
            </label>
        </div>
    );
};

export default Radio;