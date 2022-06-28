import React from "react";
import logo from '../images/logo_white.svg'

export const Footer = () => {
    return (
        <div id="footer" >
            <div id="img-logo">
                <img src={logo} alt="" />
            </div>
            <div id="footer-nav">
                <ul>
                    <li>Breakfast</li>
                    <li>Brunch</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>
            <div id="footer-span">
                <span>Baby's Food Place
                    <br></br> copyright@2021</span>
            </div>
        </div>
    )
}