import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            {/* TOP */}
            <div className="footer-top">

                {/* LEFT */}
                <div className="footer-left">

                    {/* logo row */}
                    <div className="footer-brand">
                        <img src="/FooterLogo.png" alt="IdliXpress logo" />
                    </div>

                    {/* contact */}
                    <div className="footer-contact">
                        <p>Fresh food delivered fast.</p>
                        <p>support@idlixpress.com</p>
                    </div>

                    {/* tagline UNDER contacts */}
                    <p className="footer-tagline">
                        Soft, fluffy South Indian idlis made fresh daily.
                    </p>

                </div>

                {/* RIGHT LINKS */}
                <div className="footer-right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/order">Order</Link>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} IdliXpress. All rights reserved.</p>
            </div>

        </footer>
    );
}
