import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './nav-bar.scss';

function NavBar() {
    return (
        <div id="nav-bar">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;