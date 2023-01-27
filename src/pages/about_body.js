import React from "react";
import abouta from "../assets/img/about/about.svg";
import {Link} from 'react-router-dom';
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
                                        <li className="breadcrumb-item active">About</li>
                                    </ul>
                                </nav>
                                <h1 className="text-center">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3">
                            <h2 className="title-section">PecMate </h2>
                            <div className="divider"></div>
                            <p>PECMATE was founded by students of PEC to help students solve assignments in no time</p>
                            <p>We aim to create an interactive website for user and freelancer that bridges the gap between the two and thus makes the process of completing assignments a lot easier.
                                This will target all the students that require urgent help for completing assignments.
                                Providing rapid services for buying items from pec market will also be covered.</p>
                            <p>PECMATE will also provide a platform to many freelancers who can earn  money by completing  other student's assignments.
                                PECMATE will also help them in campus life as they can buy anything online from pec market through our app and can see the availability of various items in pec market.
                            </p>
                        </div>
                        <div className="col-lg-6 py-3">
                            <div className="img-fluid py-3 text-center">
                                <img style={{ width: "500px", marginTop: "10px" }} src={abouta} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section bg-light">
                    <div className="container">
                        <div className="text-center wow fadeInUp">
                            <div className="subhead">Our services</div>
                            <h2 className="title-section">How PecMate Team Can Help</h2>
                            <div className="divider mx-auto"></div>
                        </div>

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
            <div className="page-section">
                <div className="container">
                    <div className="text-center wow fadeInUp">
                        <div className="subhead">Pricing Plan</div>
                        <h2 className="title-section">Choose plan the right for you</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 py-3 wow zoomIn">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="pricing-type">Basic</div>
                                    <div className="price">
                                        <span className="dollar">₹</span>
                                        <h1>599<span className="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div className="body">
                                    <p>2 Assignments <span className="suffix"> Complete</span></p>
                                    <p>1 Practical file<span className="suffix"> Complete</span></p>
                                    <p>2 Free <span className="suffix"> Delivery</span></p>
                                    <p> * <span className="suffix"> Terms and conditions applied </span></p> <br />
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-pricing btn-block">Subscribe</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 py-3 wow zoomIn">
                            <div className="card-pricing marked">
                                <div className="header">
                                    <div className="pricing-type">Premium</div>
                                    <div className="price">
                                        <span className="dollar">₹</span>
                                        <h1>2199<span className="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div className="body">
                                    <p>15 Assignments <span className="suffix">Complete</span></p>
                                    <p>3 practical files <span className="suffix">Complete</span></p>
                                    <p>Free <span className="suffix"> Delivery</span></p>
                                    <p> 24/7 <span className="suffix"> Service </span></p>
                                    <p> Special Discounts<span className="suffix"></span></p>
                                    <p> * <span className="suffix"> Terms and conditions applied </span></p>
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-pricing btn-block">Subscribe</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 py-3 wow zoomIn">
                            <div className="card-pricing">
                                <div className="header">
                                    <div className="pricing-type">Standard</div>
                                    <div className="price">
                                        <span className="dollar">₹</span>
                                        <h1>1199<span className="suffix"></span></h1>
                                    </div>
                                    <h5>Per Semester</h5>
                                </div>
                                <div className="body">
                                    <p>7 Assignments <span className="suffix"> Complete</span></p>
                                    <p>2 Practical File<span className="suffix"> Complete</span></p>
                                    <p>Free<span className="suffix"> Delivery</span></p>
                                    <p> 24/7 <span className="suffix"> Service </span></p>
                                    <p> * <span className="suffix"> Terms and conditions applied </span></p>
                                </div>
                                <div className="footer">
                                    <Link to="#" className="btn btn-pricing btn-block">Subscribe</Link>
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