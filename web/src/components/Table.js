import React, { useState, useEffect } from "react";
import plus from '../images/icon_plus_white.svg';
import { Link } from "react-router-dom";
import trash from "../images/icon_trashcan.svg";


export const Table = () => {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        try {
            let res = await fetch('/api/v1/blog', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setRecipes(data);
        } catch (err) {
            console.log(err)
        }
    };

    const deleteRecipes = async (_id) => {
        try {
            let res = await fetch(`/api/v1/blog/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json(data);
            setRecipes(data);
        } catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {
        getRecipes()
        
    }, [])



    return (
        <div>
            <div className="big-header">
                <div>
                    <h2 className="main-title">My Recipes</h2>
                </div>
                <div><hr></hr></div>

                <button className="orange-btn"><Link to="/recipes"><img src={plus} alt="" /></Link></button>

            </div>
            <div id="table">
                <table >
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Category</th>
                            <th>Created on</th>
                            <th id="delete-text">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((tabela, i) => {
                            return (
                                <tr key={i}>
                                    <td id="t-name">{tabela.title}</td>
                                    <td id="t-category">
                                        <p>
                                            {tabela.category}
                                        </p>
                                    </td>
                                    <td id="t-date">{tabela.createdAt}</td>
                                    <td id="t-button">
                                        <button onClick={() => deleteRecipes(tabela._id)}  >
                                            <img src={trash} alt="" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}