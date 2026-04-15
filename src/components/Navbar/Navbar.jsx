import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ cartCount = 0 }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;
    const isOrderPage = location.pathname === "/order";

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* LOGO */}
                <Link to="/" className="logo">
                    <img src="/NavbarLogo.png" alt="logo" />
                    Idli Xpress
                </Link>

                {/* RIGHT SIDE GROUP (links + CTA) */}
                <div className="nav-right">

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

                    {/* CTA BUTTON */}
                    <button
                        className="cta-btn"
                        onClick={() => navigate("/order")}
                    >
                        {isOrderPage ? `🛒 Cart (${cartCount})` : "Order Now"}
                    </button>

                </div>

                {/* HAMBURGER */}
                <button className="hamburger" onClick={() => setOpen(!open)}>
                    ☰
                </button>

            </div>
        </header>
    );
}
