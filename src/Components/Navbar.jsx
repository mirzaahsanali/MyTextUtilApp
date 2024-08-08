import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = (props) => {

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = (e) => {
        setDarkMode(!darkMode);
        let body = document.querySelector("body");
        if(!darkMode){
            body.setAttribute("data-bs-theme", "dark");
            props.showAlert("Dark Mode enabled");
        }else{
            body.setAttribute("data-bs-theme", "light");
            props.showAlert("Light Mode enabled");
        }
    }

    return (
        <>
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={darkMode} onClick={handleDarkMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
                        </div>
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Navbar;