import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {

    const formDataInit = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(formDataInit);

    const submit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            let res = await fetch('/api/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type': 'application/json'
                }
            
            });
            if (!res.ok) {
                throw 'Error logging in';
            }
            let data = await res.json();
            localStorage.setItem('jwt', data.token);
        } catch (err) {
            alert(err);
        }
    };

    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="main">
            <div className="big-header">
                <div>
                    <h2 className="main-title" >Login</h2>
                </div>
                <div><hr></hr></div>
            </div>
            <div className="main-login" >
                <div className="text-div" >
                    <h1 className="big-title">Welcome to <span id="black-title">Baby's</span> </h1>
                    <p id="login-p">All the Lorem Ipsum Generators on the Internet ted to repat predefined chunks as necessary, making this the
                        first true generator on the Internet.It uses a dictionary of over 200 Latin words, comined with a handful of
                        model sentence structures, to generate Lorem Ipsum which look reasonable. The generated Lorem Ipsum is therfore alwas free
                        from repetition, injected humuour, or non-characeristic words etc.
                    </p>
                </div>

                <div id="login-div">
                    <form className="login-form" onSubmit={submit}>
                        <label className="login-input">
                            <span>Email</span>
                            <input className="inputs" type="email" name="email" value={formData.email} onChange={inputChange} />
                        </label>
                        <br />
                        <label className="login-input">
                            <span>Password</span>
                            <input className="inputs" type="password" name="password" value={formData.password} onChange={inputChange} />
                        </label>
                        <br />
                        <br />
                        <button type="submit" className="green-btn">LOGIN </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

