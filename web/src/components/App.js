import React from "react";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Login } from "./Login";
import { CreateAccount } from "./CreateAccount";
import { MyProfile } from "./MyProfile";
import { Route, Routes } from "react-router";
import { Footer } from "./Footer";
import { Popup } from "./Popup";
import { MyRecipes } from "./MyRecipes";
import { Table } from "./Table";
import { Lunch } from "./Lunch";
import { Breakfast } from "./Breakfast";
import { Brunch } from "./Brunch";
import { Dinner } from "./Dinner";
import { Card } from "./Card";

import { useState } from "react";

const App = () => {
    
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/recipes" element={<MyRecipes/>} />
                <Route path="/" element={<Main />}  />
                <Route path="/recipes/breakfast" element={<Breakfast />} />
                <Route path="/recipes/lunch" element={<Lunch/>} />
                <Route path='/recipes/brunch' element={<Brunch />} />
                <Route path="/recipes/dinner" element={<Dinner/>} />
                <Route path="/my-recipes" element={<Table  />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAcc" element={<CreateAccount />} />
                <Route path="profile"  element={<MyProfile />}/>
            </Routes>           
            <Footer />
        </div>
    );
}

export default App;
