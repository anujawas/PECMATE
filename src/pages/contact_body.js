import React from "react";
import contact from "../assets/img/contact.svg";
function Contact() {
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
                                        <li class="breadcrumb-item active">Contact</li>
                                    </ul>
                                </nav>
                                <h1 class="text-center">Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="page-section">
                <div class="container">
                    <div class="row text-center align-items-center">
                        <div class="col-lg-4 py-3">
                            <div class="display-4 text-center text-primary"><span class="mai-pin"></span></div>
                            <p class="mb-3 font-weight-medium text-lg">Address</p>
                            <p class="mb-0 text-secondary">Punjab Engineering College Sector 12 Chandigarh</p>
                        </div>
                        <div class="col-lg-4 py-3">
                            <div class="display-4 text-center text-primary"><span class="mai-call"></span></div>
                            <p class="mb-3 font-weight-medium text-lg">Phone</p>
                            <p class="mb-0"><a href="https://google.com" class="text-secondary">+91 9878******</a></p>
                            <p class="mb-0"><a href="https://google.com" class="text-secondary">+91 8075******</a></p>
                        </div>
                        <div class="col-lg-4 py-3">
                            <div class="display-4 text-center text-primary"><span class="mai-mail"></span></div>
                            <p class="mb-3 font-weight-medium text-lg">Email Address</p>
                            <p class="mb-0"><a href="#" class="text-secondary">Pecmatechandigarh@gmail.com</a></p>
                            <p class="mb-0"><a href="#" class="text-secondary">abhimehta2002@yahoo.com.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt-4">
                    <div class="row">
                        <div class="col-md-6 px-0">
                            <div>
                                <img style={{ width: "700px", paddingTop: "100px" }} src={contact} alt="" />
                            </div>
                        </div>
                        <div style={{border:"2px solid #6c55f9", borderRadius:"10px", padding:"20px", marginLeft:"30px"}} class="col-lg-5 mb-5 mb-lg-0">
                            <div action="#" class="contact-form py-6 px-lg-4">
                                <h2 class="mb-4 font-weight-medium text-secondary">Get in touch</h2>
                                <div class="row form-group">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <label class="text-black" for="fname">First Name</label>
                                        <input type="text" id="fname" class="form-control" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="text-black" for="lname">Last Name</label>
                                        <input type="text" id="lname" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="email">Email</label>
                                        <input type="email" id="email" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-group">

                                    <div class="col-md-12">
                                        <label class="text-black" for="subject">Subject</label>
                                        <input type="text" id="subject" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-md-12">
                                        <label class="text-black" for="message">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="5" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>

                                <div class="row form-group mt-4">
                                    <div class="col-md-12">
                                        <input type="submit" value="Send Message" class="btn btn-primary" />
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