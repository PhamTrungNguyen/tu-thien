import React from 'react';

const InputThuan = ({ dataForm, setDataForm }) => {
    return (
        <div>
            <div className="input">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => {
                        setDataForm({ ...dataForm, regname: e.target.value })
                    }}
                />
                <span className="spin" />
            </div>
        </div>
    );
};

export default InputThuan;