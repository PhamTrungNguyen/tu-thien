import React from 'react';

const InputThuan = ({ children }) => {
    return (
        <div>
            <div className="input">
                <label htmlFor="username">{children}</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={ }
                />
                <span className="spin" />
            </div>
        </div>
    );
};

export default InputThuan;