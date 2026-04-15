import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* LOGO */}
                <Link to="/" className="logo">
                    <img src="/NavbarLogo.png" alt="logo" />
                    Idli Xpress
                </Link>

                {/* LINKS */}
                <ul className={`navbar-links ${open ? "active" : ""}`}>
                    <li>
                        <Link className={isActive("/") ? "active" : ""} to="/">
                        Home
                        </Link>
                    </li>

                    <li>
                        <Link className={isActive("/about") ? "active" : ""} to="/about">
                        About
                        </Link>
                    </li>

                    <li>
                        <Link className={isActive("/menu") ? "active" : ""} to="/menu">
                        Menu
                        </Link>
                    </li>
                </ul>

                {/* HAMBURGER */}
                <button className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </button>

            </div>
        </header>
    );
}
