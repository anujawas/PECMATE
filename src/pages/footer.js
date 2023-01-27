import React from "react";
import back from '../assets/img/world_pattern.svg';
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div>
            <footer className="page-footer bg-image" style={{backgroundImage: `url(${back})`}}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3 py-3">
                            <h3>PECMATE</h3>
                            <p>This revoultionary idea was founded by meticuluos students of PEC, saving a lot of students from faiing in their subjects.</p>

                            <div className="social-media-button">
                                <a href = "https://www.facebook.com/profile.php?id=100075717600557"><span className="mai-logo-facebook-f"></span></a>
                                <a href="https://twitter.com/PecMate"><span className="mai-logo-twitter"></span></a>
                                <a href="https://www.instagram.com/pecmate/"><span className="mai-logo-instagram"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>PECMATE</h5>
                            <ul className="footer-menu">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/pec_market">PecMarket</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/">Terms of conditions</Link></li>
                                <li><Link to="/contact">Help & Support</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Contact Us</h5>
                            <p>Punjab Engineering College Sector 12 Chandigarh</p>
                            <Link to="/" className="footer-link">+91 999999650</Link> <br/>
                            <a href="https://pecmate.000webhostapp.com/" className ="footer-link">pecmate.nic.in</a>
                        </div>
                        <div className="col-lg-3 py-3">
                            <h5>Newsletter</h5>
                            <p>Get updates, news or events on your mail.</p>
                            
                                <input type="text" className="form-control" placeholder="Enter your email.."/>
                                <button type ="submit" className ="btn btn-success btn-block mt-2">Subscribe</button>
                            
                        </div>
                    </div>

                    <p className="text-center" id="copyright">Copyright &copy; 2021 PecMate</p>
                </div>
            </footer>

        </div>
        
    );

}
export default Footer;