import React from "react";
import {Link} from 'react-router-dom'
import '../signup/signinmain.css';
function Signinmain() {
    return (
        <div>
            <div className="logo">
                <Link to="/">
                    <div className="logo">
                        <span className="lo" id="logo1">
                            Pec
                        </span>
                        <span className="lo" id="logo2">
                            Mate
                        </span>
                    </div>
                </Link>
                <div className="background">
                    <div className="shape" />
                    <div className="shape" />
                </div>
                <form>
                    <h3 className="loginlogo">Login</h3>
                    <Link  to ="">
                    <input
                        type="button"
                        className="login"
                        id="signin_student"
                        defaultValue="Sign in as student"
                    />
                    </Link >
                    <Link to="/signup/signinfreelancer">
                    <input
                        type="button"
                        className="login"
                        id="signin_freelancer"
                        defaultValue="Sign in as Freelancer"
                    />
                    </Link>
                    <Link>
                    <input
                        type="button"
                        className="login"
                        id="signin_vendor"
                        defaultValue="Sign in as Vendor"
                    /></Link>
                    <div className="signupoption">
                        <Link to ="signupmain">Don't have an account?Sign up here</Link>
                    </div>
                </form>
            </div>
        
        </div>
    );
}
export default Signinmain;