import React from "react";
import avatar from '../images/Avatar.png'

export const MyProfile = () => {

    return (
        <div >
              <div className="big-header">
                <div>
                    <h2 className="main-title">My Profile</h2>
                </div>
                <div><hr></hr></div>
            </div>
            <div className="main-create">
                <div className="upload-recipe" id="upload-profile" >
                    <img src={avatar} alt="" className="avatar" />
                    <button className="grey-btn" >CHANGE AVATAR</button>
                </div>
                <div className="create-div profile-inputs">

                    <div className="left-input">
                        <form className="create-form" >
                            <label className="login-input">
                                <span>First Name</span>
                                <input className="inputs" type='text' name="first-name" />
                            </label>
                            <label className="login-input">
                                <span>Email</span>
                                <input className="inputs" type='email' name="email" />
                            </label>
                            <label className="login-input">
                                <span>Password</span>
                                <input className="inputs" type='password' name="password" />
                            </label>
                            <button className="green-btn" id="create-btn">SAVE</button>
                        </form>
                    </div>

                    <div className="right-input">
                        <form className="create-form">
                            <label className="login-input">
                                <span>Last Name</span>
                                <input className="inputs" type='text' name="last-name" />
                            </label>
                            <label className="login-input">
                                <span>Birthday</span>
                                <input className="inputs" type='date' name="birthday" />
                            </label>
                            <label className="login-input">
                                <span>Repeat Password</span>
                                <input className="inputs" type='password' name="repeat-password" />
                            </label>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}