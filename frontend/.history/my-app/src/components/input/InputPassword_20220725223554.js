import React, { useState } from 'react';
import { Fragment } from 'react';
import { IconEyeClose, IconEyeOpen } from '../icon';
import Input from './Input';

const InputPasswordInput = ({ control }) => {
    const [togglePassword, setTogglePassword] = useState(false);
    if (!control) return;
    return (
        <Fragment>
            <Input
                type={togglePassword ? "text" : "password"}
                name="password"
                control={control}
                placeholder="Enter your Password"
            >
                {/* toggle password */}
                {togglePassword ? (
                    <IconEyeOpen
                        className="input-icon"
                        onClick={() => {
                            setTogglePassword(!togglePassword);
                        }}
                    ></IconEyeOpen>
                ) : (
                    <IconEyeClose
                        className="input-icon"
                        onClick={() => {
                            setTogglePassword(!togglePassword);
                        }}
                    ></IconEyeClose>
                )}
            </Input>
        </Fragment>
    );
};

export default InputPasswordInput;