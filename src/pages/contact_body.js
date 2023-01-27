import React from "react";
import contact from "../assets/img/contact.svg";
function Contact() {
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
                                        <li className="breadcrumb-item active">Contact</li>
                                    </ul>
                                </nav>
                                <h1 className="text-center">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-section">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-pin"></span></div>
                            <p className="mb-3 font-weight-medium text-lg">Address</p>
                            <p className="mb-0 text-secondary">Punjab Engineering College Sector 12 Chandigarh</p>
                        </div>
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-call"></span></div>
                            <p className="mb-3 font-weight-medium text-lg">Phone</p>
                            <p className="mb-0"><a href="https://google.com" className="text-secondary">+91 9878******</a></p>
                            <p className="mb-0"><a href="https://google.com" className="text-secondary">+91 8075******</a></p>
                        </div>
                        <div className="col-lg-4 py-3">
                            <div className="display-4 text-center text-primary"><span className="mai-mail"></span></div>
                            <p className="mb-3 font-weight-medium text-lg">Email Address</p>
                            <p className="mb-0"><a href="/" className="text-secondary">Pecmatechandigarh@gmail.com</a></p>
                            <p className="mb-0"><a href="/" className="text-secondary">abhimehta2002@yahoo.com.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div>
                                <img style={{ width: "700px", paddingTop: "100px" }} src={contact} alt="" />
                            </div>
                        </div>
                        <div style={{border:"2px solid #6c55f9", borderRadius:"10px", padding:"20px", marginLeft:"30px"}} className="col-lg-5 mb-5 mb-lg-0">
                            <div action="#" className="contact-form py-6 px-lg-4">
                                <h2 className="mb-4 font-weight-medium text-secondary">Get in touch</h2>
                                <div className="row form-group">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="email">Email</label>
                                        <input type="email" id="email" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">

                                    <div className="col-md-12">
                                        <label className="text-black" for="subject">Subject</label>
                                        <input type="text" id="subject" className="form-control" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label className="text-black" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>

                                <div className="row form-group mt-4">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send Message" className="btn btn-primary" />
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
export default Contact;