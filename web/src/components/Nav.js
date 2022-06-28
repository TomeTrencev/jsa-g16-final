import {React,useState} from 'react';
import logo from '../images/logo_color.svg';
import { Link } from 'react-router-dom';
const jwt = localStorage.getItem("jwt")

export const Nav = () => {


    const [isLoggedin, setIsLoggedin] = useState(false);

    const logout = () => {
        localStorage.removeItem('jwt');
        setIsLoggedin(false);
      };

    return (
        <div id='nav'>
            <div>
                <a href='/'><Link to="/">
                    <img id='black-logo' src={logo} alt='' />
                </Link></a>
            </div>
            <div id='main-nav'>
                <nav id='navigation'>
                    <ul className='nav-bar'>
                        <li className="nav-item">
                            <Link to='/recipes/breakfast'>BREAKFAST</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/recipes/brunch'>BRUNCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/recipes/lunch'>LUNCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/recipes/dinner'>DINNER</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {jwt ?
                <div className='loged-in'>
                    <button id='recipes-btn'>
                        <Link to={"/my-recipes"}>MY RECIPES</Link>
                    </button>
                    <button id='profile-btn'>
                        <Link to={"/profile"}>MY PROFILE</Link>
                    </button>
                    <button onClick={logout} id='log-out-btn'>LOG OUT
                    
                    </button>
                </div>
                :
                <div className='log-register'>
                    <Link to='/login'>
                        <button className='right-menu grey-btn' to="/login">LOG IN</button>
                    </Link>
                    <span className='right-menu' id='or'>or</span>
                    <Link to='/createAcc'>
                        <button className='right-menu green-btn' >CREATE ACCOUNT</button>
                    </Link>
                </div>
            }
        </div>
    )
}