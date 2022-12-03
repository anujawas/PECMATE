import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                <div className="container">
                    <Link to="/" className="navbar-brand">Pec<span className="text-primary">Mate</span></Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pec_market">Pec-Market</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/assignment">Assignment section</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-primary ml-lg-2" to="/signup/Signinmain">Log-in</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>

    </div>
    );
}
export default Header;