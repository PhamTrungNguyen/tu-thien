import React from 'react';

const SignUpPage = () => {
    return (
        <div>
            <form onSubmit={handleSubmit(handleSignIn)} autoComplete="off" className="box">
                <div className="title">LOGIN</div>
                <Input className="input" name="name" type="text" control={control}>
                    Username
                </Input>
                <Input className="input" name="password" type="password" control={control}>
                    Password
                </Input>
                <div className="button login">
                    <button type="submit">
                        <span>GO</span> <i className="fa fa-check" />
                    </button>
                </div>
                <a href="#1" className="pass-forgot">
                    Forgot your password?
                </a>
            </form>
        </div>
    );
};

export default SignUpPage;