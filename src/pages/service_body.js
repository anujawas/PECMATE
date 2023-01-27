import React from "react";
import assilogo from '../assets/img/icons/book.png'
import freelogo from '../assets/img/services/service-3.svg'
import pecmarklogo from "../assets/img/services/service-2.svg"
function Body() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="page-banner">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-md-6">
                                <nav aria-label="Breadcrumb">
                                    <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active">Services</li>
                                    </ul>
                                </nav>
                                <h1 className="text-center">Our Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={assilogo} alt="" style={{width:"100px"}}/>
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Assignment Section</h5>
                                    <p>We help you you complete your Assignments before deadline</p>
                                    <a href="../html/Assignment.html" className="btn btn-primary">Complete your assignment fast!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-service wow fadeInUp">
                                <div className="header">
                                    <img src={pecmarklogo} alt=""/>
                                </div>
                                <div className="body">
                                    <h5 className="text-secondary">Pec-Market Section</h5>
                                    <p>We help you order items online from pec market through our website.
                                    </p>
                                    <a href="../html/PecMarket/Pec-market.html" className="btn btn-primary">Order Your favourite stuff fast !</a>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4">
                        <div className="card-service wow fadeInUp">
                            <div className="header">
                                <img src={freelogo} alt=""/>
                            </div>
                            <div className="body">
                                <h5 className="text-secondary">Work as a freelancer </h5>
                                <p>We will help you earn some extra cash just by writing assignments.</p>
                                <a href="../pecmate_signin_signup/signup_freelancer1.html" className="btn btn-primary">Start your freelancer journey fast !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-light">
                <div className="container">
                    <div className="text-center">
                        <div className="subhead">Our services</div>
                            <h2 className="title-section">How PECMATE Team Can Help</h2>
                                <div className="divider mx-auto"></div>

                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div className="features">
                                                <div className="header mb-3">
                                                    <span className="mai-business"></span>
                                                </div>
                                                <h5>Assignments</h5>
                                                <p>Complete your assignments before deadline. Get maximum marks in least possible time.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div className="features">
                                                <div className="header mb-3">
                                                    <span className="mai-business"></span>
                                                </div>
                                                <h5>Practicals</h5>
                                                <p>Complete your practicals in no time. Don't worry we will do it for you.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div className="features">
                                                <div className="header mb-3">
                                                    <span className="mai-business"></span>
                                                </div>
                                                <h5>PEC-Market</h5>
                                                <p>Feeling lazy to get out of hostel and buy something from PEC Market. Don't worry we will bring it to your doorstep</p>
                                            </div>
                                        </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                                <div className="features">
                                    <div className="header mb-3">
                                        <span className="mai-business"></span>
                                    </div>
                                    <h5>Freelancer</h5>
                                    <p>Wanna earn some extra cash just by writing assignments. You are at the right place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    );
}
export default Body;