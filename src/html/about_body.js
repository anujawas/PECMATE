import React from "react";
import abouta from "../assets/img/about/about.svg";
import {Link} from 'react-router-dom';
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
                                        <li class="breadcrumb-item active">About</li>
                                    </ul>
                                </nav>
                                <h1 class="text-center">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="page-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 py-3">
                            <h2 class="title-section">PecMate </h2>
                            <div class="divider"></div>
                            <p>PECMATE was founded by students of PEC to help students solve assignments in no time</p>
                            <p>We aim to create an interactive website for user and freelancer that bridges the gap between the two and thus makes the process of completing assignments a lot easier.
                                This will target all the students that require urgent help for completing assignments.
                                Providing rapid services for buying items from pec market will also be covered.</p>
                            <p>PECMATE will also provide a platform to many freelancers who can earn  money by completing  other student's assignments.
                                PECMATE will also help them in campus life as they can buy anything online from pec market through our app and can see the availability of various items in pec market.
                            </p>
                        </div>
                        <div class="col-lg-6 py-3">
                            <div class="img-fluid py-3 text-center">
                                <img style={{ width: "500px", marginTop: "10px" }} src={abouta} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section bg-light">
                    <div class="container">
                        <div class="text-center wow fadeInUp">
                            <div class="subhead">Our services</div>
                            <h2 class="title-section">How PecMate Team Can Help</h2>
                            <div class="divider mx-auto"></div>
                        </div>

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
            <div class="page-section">
                <div class="container">
                    <div class="text-center wow fadeInUp">
                        <div class="subhead">Pricing Plan</div>
                        <h2 class="title-section">Choose plan the right for you</h2>
                        <div class="divider mx-auto"></div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-4 py-3 wow zoomIn">
                            <div class="card-pricing">
                                <div class="header">
                                    <div class="pricing-type">Basic</div>
                                    <div class="price">
                                        <span class="dollar">₹</span>
                                        <h1>599<span class="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div class="body">
                                    <p>2 Assignments <span class="suffix"> Complete</span></p>
                                    <p>1 Practical file<span class="suffix"> Complete</span></p>
                                    <p>2 Free <span class="suffix"> Delivery</span></p>
                                    <p> * <span class="suffix"> Terms and conditions applied </span></p> <br />
                                </div>
                                <div class="footer">
                                    <Link to="#" class="btn btn-pricing btn-block">Subscribe</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3 wow zoomIn">
                            <div class="card-pricing marked">
                                <div class="header">
                                    <div class="pricing-type">Premium</div>
                                    <div class="price">
                                        <span class="dollar">₹</span>
                                        <h1>2199<span class="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div class="body">
                                    <p>15 Assignments <span class="suffix">Complete</span></p>
                                    <p>3 practical files <span class="suffix">Complete</span></p>
                                    <p>Free <span class="suffix"> Delivery</span></p>
                                    <p> 24/7 <span class="suffix"> Service </span></p>
                                    <p> Special Discounts<span class="suffix"></span></p>
                                    <p> * <span class="suffix"> Terms and conditions applied </span></p>
                                </div>
                                <div class="footer">
                                    <Link to="#" class="btn btn-pricing btn-block">Subscribe</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 py-3 wow zoomIn">
                            <div class="card-pricing">
                                <div class="header">
                                    <div class="pricing-type">Standard</div>
                                    <div class="price">
                                        <span class="dollar">₹</span>
                                        <h1>1199<span class="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div class="body">
                                    <p>7 Assignments <span class="suffix"> Complete</span></p>
                                    <p>2 Practical File<span class="suffix"> Complete</span></p>
                                    <p>Free<span class="suffix"> Delivery</span></p>
                                    <p> 24/7 <span class="suffix"> Service </span></p>
                                    <p> * <span class="suffix"> Terms and conditions applied </span></p>
                                </div>
                                <div class="footer">
                                    <Link to="#" class="btn btn-pricing btn-block">Subscribe</Link>
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