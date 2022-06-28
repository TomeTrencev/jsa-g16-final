import React, { useState } from "react";
import food from "../images/food1.jpg";
import back from '../images/icon_back_white.svg';
import { Link } from "react-router-dom";

export const MyRecipes = () => {

    const recipesInit = {
        category: '',
        title: '',
        paragraph: '',
        details:'',
        min: '',
        persons: '',
        
    };

    const [recipeData, setRecipeData] = useState(recipesInit);

    const submit = async (e) => {
        // e.preventDefault();
        console.log(recipeData);
        try {
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
            let data = await res.json();
            setRecipeData(data);
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
            <div className="recipes-main">
                <div className="upload-recipe">
                    <img width="234px" src={food} alt="" />
                    <button className="grey-btn">Upload Image</button>

                </div>
                <div className="recipe-inputs">
                    <form onSubmit={submit}>
                        <label className="login-input">
                            <span>Recipe Title</span>
                            <input
                                className="inputs"
                                type="text"
                                name="title"
                                value={recipeData.title}
                                onChange={(e)=>{
                                    setRecipeData({...recipeData,title:e.target.value})
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
                                    value={recipeData.category}
                                    onChange={(e)=>{
                                        setRecipeData({...recipeData,category:e.target.value})
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
                                    value={recipeData.min}
                                    onChange={(e)=>{
                                        setRecipeData({...recipeData,min:e.target.value})
                                    }}
                                />
                            </label>
                            <label className="login-input">
                                <span>No.People</span>
                                <input
                                    className="inputs"
                                    type="text"
                                    name="people"
                                    value={recipeData.persons}
                                    onChange={(e)=>{
                                        setRecipeData({...recipeData,persons:e.target.value})
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
                                value={recipeData.paragraph}
                                onChange={(e)=>{
                                    setRecipeData({...recipeData,paragraph:e.target.value})
                                }}
                                ></textarea>
                            </label>
                            <button className="green-btn">SAVE</button>
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
                        value={recipeData.details}
                        onChange={(e)=>{
                            setRecipeData({...recipeData,details:e.target.value})
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