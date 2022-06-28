import React, { useState } from "react";

export const CreateAccount = () => {

    const registerInit = {
        first_name:'',
        last_name:'',
        email:'',
        birthday:'',
        password:'',
        repeat_password:''
    };

    const [registerData, setRegisterData] = useState(registerInit);

    const submit = async (e) => {
        e.preventDefault();
        console.log(registerInit);
        try {
            let res = await fetch('/api/v1/auth/register',
            {
             method:'POST',
             body:JSON.stringify(registerData),
             headers:{
                'content-type': 'application/json'
             }
            });
            if(!res.ok) {
                throw 'Something is wrong!'
            }
            let data = await res.json();
            setRegisterData(data);
        } catch (err) {
            alert(err);
        }
    };

    // const inputChange = (e) => {
    //     setRegisterData({
    //         ...registerData,
    //         [e.target.name]: e.target.value
    //     });
    // }

    return (
        <div id="main">
            <div className="big-header">
                <div>
                    <h2 className="main-title">CreateAccount</h2>
                </div>
                <div><hr></hr></div>
            </div>
            <div className="main-login">
                <div className="text-div">
                    <h1 className="big-title">Create your <br></br> <span id="black-title">account</span></h1>
                    <p className="login-c">All the Lorem Ipsum Generators on the Internet ted to repat predefined chunks as necessary, making this the
                        first true generator on the Internet.It uses a dictionary of over 200 Latin words, comined with a handful of
                        model sentence structures, to generate  Ipsum which look reasonable.</p>
                </div>
                <div>
                </div>
                <div className="create-div">

                    <div className="left-input">
                        <form onSubmit={submit} className="create-form" >
                            <label className="login-input">
                                <span>First Name</span>
                                <input className="inputs" type='text' name="first-name"
                                 value={registerData.first_name}
                                onChange ={(e)=>{setRegisterData({...registerData, first_name:e.target.value})}}
                                />
                            </label>
                            <label className="login-input">
                                <span>Email</span>
                                <input className="inputs" type='email' name="email"
                               value={registerData.email}
                                onChange={(e)=>{setRegisterData({...registerData, email:e.target.value})}}
                                />
                            </label>
                            <label className="login-input">
                                <span>Password</span>
                                <input className="inputs" type='password' name="password"
                                value={registerData.password}
                                onChange={(e)=>{setRegisterData({...registerData, password:e.target.value})}}
                                />
                            </label>
                            <button className="green-btn" id="create-btn">CREATE ACCOUNT</button>
                        </form>
                    </div>

                    <div className="right-input">
                        <form onSubmit={submit} className="create-form">
                            <label className="login-input">
                                <span>Last Name</span>
                                <input className="inputs" type='text' name="last-name"
                               value={registerData.last_name}
                               onChange={(e)=>{setRegisterData({...registerData, last_name:e.target.value})}}
                                />
                            </label>
                            <label className="login-input">
                                <span>Birthday</span>
                                <input className="inputs" type='date' name="birthday"
                                value={registerData.birthday}
                                onChange={(e)=>{setRegisterData({...registerData, birthday:e.target.value})}}
                                />
                            </label>
                            <label className="login-input">
                                <span>Repeat Password</span>
                                <input className="inputs" type='password' name="repeat-password"
                                 value={registerData.repeat_password}
                                 onChange={(e)=>{setRegisterData({...registerData, repeat_password:e.target.value})}}
                                />
                            </label>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}