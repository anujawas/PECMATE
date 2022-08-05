import React from "react";
import assilogo from '../assets/img/icons/book.png'
import freelogo from '../assets/img/services/service-3.svg'
import pecmarklogo from "../assets/img/services/service-2.svg"
function Body() {
    return (
        <div>
            <header>
                <div class="container">
                    <div class="page-banner">
                        <div class="row justify-content-center align-items-center h-100">
                            <div class="col-md-6">
                                <nav aria-label="Breadcrumb">
                                    <ul class="breadcrumb justify-content-center py-0 bg-transparent">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active">Services</li>
                                    </ul>
                                </nav>
                                <h1 class="text-center">Our Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="page-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card-service wow fadeInUp">
                                <div class="header">
                                    <img src={assilogo} alt="" style={{width:"100px"}}/>
                                </div>
                                <div class="body">
                                    <h5 class="text-secondary">Assignment Section</h5>
                                    <p>We help you you complete your Assignments before deadline</p>
                                    <a href="../html/Assignment.html" class="btn btn-primary">Complete your assignment fast!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card-service wow fadeInUp">
                                <div class="header">
                                    <img src={pecmarklogo} alt=""/>
                                </div>
                                <div class="body">
                                    <h5 class="text-secondary">Pec-Market Section</h5>
                                    <p>We help you order items online from pec market through our website.
                                    </p>
                                    <a href="../html/PecMarket/Pec-market.html" class="btn btn-primary">Order Your favourite stuff fast !</a>
                                </div>
                            </div>
                        </div>
                    <div class="col-lg-4">
                        <div class="card-service wow fadeInUp">
                            <div class="header">
                                <img src={freelogo} alt=""/>
                            </div>
                            <div class="body">
                                <h5 class="text-secondary">Work as a freelancer </h5>
                                <p>We will help you earn some extra cash just by writing assignments.</p>
                                <a href="../pecmate_signin_signup/signup_freelancer1.html" class="btn btn-primary">Start your freelancer journey fast !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-section bg-light">
                <div class="container">
                    <div class="text-center">
                        <div class="subhead">Our services</div>
                            <h2 class="title-section">How PECMATE Team Can Help</h2>
                                <div class="divider mx-auto"></div>

                                    <div class="row">
                                        <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div class="features">
                                                <div class="header mb-3">
                                                    <span class="mai-business"></span>
                                                </div>
                                                <h5>Assignments</h5>
                                                <p>Complete your assignments before deadline. Get maximum marks in least possible time.</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div class="features">
                                                <div class="header mb-3">
                                                    <span class="mai-business"></span>
                                                </div>
                                                <h5>Practicals</h5>
                                                <p>Complete your practicals in no time. Don't worry we will do it for you.</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
                                            <div class="features">
                                                <div class="header mb-3">
                                                    <span class="mai-business"></span>
                                                </div>
                                                <h5>PEC-Market</h5>
                                                <p>Feeling lazy to get out of hostel and buy something from PEC Market. Don't worry we will bring it to your doorstep</p>
                                            </div>
                                        </div>
                                    <div class="col-sm-6 col-lg-4 col-xl-3 py-3">
                                <div class="features">
                                    <div class="header mb-3">
                                        <span class="mai-business"></span>
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