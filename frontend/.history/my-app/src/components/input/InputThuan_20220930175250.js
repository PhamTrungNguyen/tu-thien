import React from 'react';

const InputThuan = ({ dataForm, setDataForm, children, name }) => {
    return (
        <div>
            <div className="input">
                <label htmlFor="username">{children}</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => {
                        setDataForm()
                    }}
                />
                <span className="spin" />
            </div>
        </div>
    );
};

export default InputThuan;