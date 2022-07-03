import React, { useState } from "react";
import back from '../images/icon_back_white.svg';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MyRecipes = () => {

    const [img, setImg] = useState();
    const [doc, setDoc] = useState();

    const onImageChange = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
        setDoc(e.target.files[0]);
    };

    const fileImg = new FormData();
    fileImg.append("document", doc);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState(0);
    const [paragraph, setParapraph] = useState('');
    const [details, setDetails] = useState('');
    const [min, setMin] = useState (0);
    const [persons, setPersons] = useState(0)

   
    
    const submit = async (e) => {
        e.preventDefault();
        const recipeData = {category, title,paragraph,details,min,persons}
        console.log(recipeData);
        try {
            let out = await fetch('/api/v1/storage', {
                method: 'POST',
                body: fileImg,
                headers: {
                   "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                }
             })
    
             recipeData.fileName = await out.json();

            let res = await fetch('/api/v1/blog',
                {
                    method: 'POST',
                    body: JSON.stringify(recipeData),
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `bearer ${localStorage.getItem('jwt')}`
                    }
                });
            if (!res.ok) {
                throw 'Something is wrong!'
            }
            console.log(recipeData);
            alert('recipe is created');
            Navigate('/')
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>

            <div className="big-header">
                <div>
                    <h2 className="main-title">My Recipes</h2>
                </div>
                <div><hr></hr></div>
                <button className="back-btn" ><Link to="/my-recipes"><img src={back} alt="" /></Link></button>

            </div>
            <div className="recipes-main" >
                <div className="upload-recipe">
                <p>Recipe Image</p>
                    <img width="234px" src={img} alt="" />
                    <label className="btnn">
                  <input className="grey-btn" type="file" onChange={onImageChange} />
                  UPLOAD IMAGE
               </label>

                </div>
                <div className="recipe-inputs">
                    <form onSubmit={submit}>
                        <label className="login-input">
                            <span>Recipe Title</span>
                            <input
                                className="inputs"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => {
                                    setTitle( e.target.value )
                                }}
                            />
                        </label>
                        <div className="category">
                            <label className="login-input">
                                <span>Category</span>

                                <select
                                    className="inputs"
                                    type="text"
                                    name="Category"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value )
                                    }}
                                >
                                    <option value='Breakfast'>Breakfast</option>
                                    <option value='Brunch'>Brunch</option>
                                    <option value='Lunch'>Lunch</option>
                                    <option value='Dinner'>Dinner</option>
                                </select>
                            </label>
                            <label className="login-input">
                                <span>Preparation Time</span>
                                <input
                                    className="inputs"
                                    type="text"
                                    name="preparation"
                                    value={min}
                                    onChange={(e) => {
                                        setMin(e.target.value )
                                    }}
                                />
                            </label>
                            <label className="login-input">
                                <span>No.People</span>
                                <input
                                    className="inputs"
                                    type="text"
                                    name="people"
                                    value={persons}
                                    onChange={(e) => {
                                        setPersons( e.target.value )
                                    }}
                                />
                            </label>

                        </div>
                        <div className="short-description">
                            <label className="login-input">

                                <span>Short Descripion</span>
                                <textarea
                                    name="short-description"
                                    type='textarea'
                                    value={paragraph}
                                    onChange={(e) => {
                                        setParapraph( e.target.value )
                                    }}
                                ></textarea>
                            </label>
                            <button className="green-btn">SAVEaaa</button>
                        </div>
                    </form>
                </div>

                <div className="long-description">
                    <form onSubmit={submit}>
                        <label className="login-input">
                            <span>Recipe</span>
                            <textarea
                                name="long-description"
                                type='textarea'
                                value={details}
                                onChange={(e) => {
                                    setDetails( e.target.value )
                                }}
                            >

                            </textarea>
                        </label>
                    </form>
                </div>

            </div>

        </div>
    )
}