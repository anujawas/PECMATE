import React from "react";
import logo from "../assets/img/undraw_book_lover_re_rwjy.svg";
import assilogo from "../assets/img/icons/book.png";
import peclogo from "../assets/img/services/service-2.svg";
import freelogo from "../assets/img/services/service-3.svg";
import goal from "../assets/img/goal.svg";
import moto from "../assets/img/undraw_organizing_projects_re_9p1k.svg";
import { Link } from "react-router-dom";
import Shop from "../pages/Shops";
function body() {
  return (
    <div>
      <>
        <div className="container">
          <div className="page-banner home-banner">
            <div className="row align-items-center flex-wrap-reverse h-100">
              <div className="col-md-6 py-5 wow fadeInLeft">
                <h1 className="mb-4">Let's Do Your Assignments</h1>
                <a
                  href="../signup/signup_main.html"
                  className="btn btn-primary ml-lg-2"
                >
                  Register{" "}
                </a>
              </div>
              <div className="col-md-6 py-5 wow zoomIn">
                <div className="img-fluid text-center">
                  {/* <img src="../assets/img/banner_image_1.svg" alt=""> */}
                  <img
                    style={{ width: 500, paddingRight: 30 }}
                    src={logo}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <a href="#about" className="btn-scroll" data-role="smoothscroll">
              <span className="mai-arrow-down" />
            </a>
          </div>
        </div>
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-service wow fadeInUp">
                  <div className="header">
                    <img
                      style={{ width: 100 }}
                      src={assilogo}
                      alt="Logo"
                    />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">Assignment Section</h5>
                    <p>We help you you complete your Assignments before deadline</p>
                    <a href="../html/Assignment.html" className="btn btn-primary">
                      Complete your assignment fast!
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-service wow fadeInUp">
                  <div className="header">
                    <img src={peclogo} alt />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">Pec-Market Section</h5>
                    <p>
                      We help you order items online from pec market through our
                      website.
                    </p>
                    <a
                      href="../html/PecMarket/Pec-market.html"
                      className="btn btn-primary"
                    >
                      Order Your favourite stuff fast !
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-service wow fadeInUp">
                  <div className="header">
                    <img src={freelogo} alt />
                  </div>
                  <div className="body">
                    <h5 className="text-secondary">Work as a freelancer </h5>
                    <p>
                      We will help you earn some extra cash just by writing
                      assignments.
                    </p>
                    <a
                      href="../pecmate_signin_signup/signup_freelancer1.html"
                      className="btn btn-primary"
                    >
                      Start your freelancer journey fast !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .page-section */}
        <div className="page-section" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <span className="subhead">About us</span>
                <h2 className="title-section">PecMate</h2>
                <div className="divider" />
                <p>
                  PECMATE comes with a solution of last-minute assignment submissions.
                  Here, students can assign their work to some&nbsp;other people who
                  wants to work as a freelancer. PECMATE will also provide a platform
                  to many freelancers who can&nbsp;earn&nbsp; money by
                  completing&nbsp; other student's assignments.
                </p>
                <p></p>
                <p>
                  PECMATE will also help them in campus life as they can buy anything
                  online from pec market through our app and can see the availability
                  of various items in pec market.
                </p>
                <a href="about.html" className="btn btn-primary mt-3">
                  Read More
                </a>
              </div>
              <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid py-3 text-center">
                  {/* <img src="../assets/img/person/modi_ji.jpg" alt=""> */}
                  <img style={{ width: 700 }} src={goal} alt=""/>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .page-section */}
        {/* fvklsdkfgsdf */}
        {/* ffsdf */}
        <div className="page-section bg-light">
          <div className="container">
            <div className="text-center wow fadeInUp">
              <div className="subhead">Our services</div>
              <h2 className="title-section">How PecMate Team Can Help</h2>
              <div className="divider mx-auto" />
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-book" />
                  </div>
                  <h5>Assignments</h5>
                  <p>
                    Complete your assignments before deadline. Get maximum marks in
                    least possible time.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-bookmark" />
                  </div>
                  <h5>Practicals</h5>
                  <p>
                    Complete your practicals in no time. Don't worry we will do it for
                    you.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-business" />
                  </div>
                  <h5>PEC-Market</h5>
                  <p>
                    Feeling lazy to get out of hostel and buy something from PEC
                    Market. Don't worry we will bring it to your doorstep
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 py-3">
                <div className="features">
                  <div className="header mb-3">
                    <span className="mai-briefcase" />
                  </div>
                  <h5>Freelancer</h5>
                  <p>
                    Wanna earn some extra cash just by writing assignments. You are at
                    the right place.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .page-section */}
        <div className="page-section">
          <div className="container">
            <div className="text-center wow fadeInUp">
              <div className="subhead">Pricing Plan</div>
              <h2 className="title-section">Choose plan the right for you</h2>
              <div className="divider mx-auto" />
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 py-3 wow zoomIn">
                <div className="card-pricing">
                  <div className="header">
                    <div className="pricing-type">Basic</div>
                    <div className="price">
                      <span className="dollar">₹</span>
                      <h1>
                        599
                        <span className="suffix" />
                      </h1>
                    </div>
                    <h5>Per Semester</h5>
                  </div>
                  <div className="body">
                    <p>
                      2 Assignments <span className="suffix"> Complete</span>
                    </p>
                    <p>
                      1 Practical file<span className="suffix"> Complete</span>
                    </p>
                    <p>
                      2 Free <span className="suffix"> Delivery</span>
                    </p>
                    <p>
                      {" "}
                      * <span className="suffix"> Terms and conditions applied </span>
                    </p>{" "}
                    <br />
                  </div>
                  <div className="footer">
                    <a href="#" className="btn btn-pricing btn-block">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-3 wow zoomIn">
                <div className="card-pricing marked">
                  <div className="header">
                    <div className="pricing-type">Premium</div>
                    <div className="price">
                      <span className="dollar">₹</span>
                      <h1>
                        2199
                        <span className="suffix" />
                      </h1>
                    </div>
                    <h5>Per Semester</h5>
                  </div>
                  <div className="body">
                    <p>
                      15 Assignments <span className="suffix">Complete</span>
                    </p>
                    <p>
                      3 practical files <span className="suffix">Complete</span>
                    </p>
                    <p>
                      Free <span className="suffix"> Delivery</span>
                    </p>
                    <p>
                      {" "}
                      24/7 <span className="suffix"> Service </span>
                    </p>
                    <p>
                      {" "}
                      Special Discounts
                      <span className="suffix" />
                    </p>
                    <p>
                      {" "}
                      * <span className="suffix"> Terms and conditions applied </span>
                    </p>
                  </div>
                  <div className="footer">
                    <a href="#" className="btn btn-pricing btn-block">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 py-3 wow zoomIn">
                <div className="card-pricing">
                  <div className="header">
                    <div className="pricing-type">Standard</div>
                    <div className="price">
                      <span className="dollar">₹</span>
                      <h1>
                        1199
                        <span className="suffix" />
                      </h1>
                    </div>
                    <h5>Per Semester</h5>
                  </div>
                  <div className="body">
                    <p>
                      7 Assignments <span className="suffix"> Complete</span>
                    </p>
                    <p>
                      2 Practical File<span className="suffix"> Complete</span>
                    </p>
                    <p>
                      Free<span className="suffix"> Delivery</span>
                    </p>
                    <p>
                      {" "}
                      24/7 <span className="suffix"> Service </span>
                    </p>
                    <p>
                      {" "}
                      * <span className="suffix"> Terms and conditions applied </span>
                    </p>
                  </div>
                  <div className="footer">
                    <a href="#" className="btn btn-pricing btn-block">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .page-section */}
        {/* Banner info */}
        <div className="page-section banner-info">
          <div
            className="wrap bg-image"
            style={{ backgroundImage: "url(../assets/img/bg_pattern.svg)" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                  <h2 className="title-section">
                    Aim of PecMate - <br />
                  </h2>
                  <div className="divider" />
                  <p>
                    We aim to create an interactive website for user and freelancer
                    that bridges the gap between the two and thus&nbsp;makes the
                    process of completing assignments a lot&nbsp;easier. This will
                    target all the students that require urgent help for completing
                    assignments.
                  </p>
                  <p>
                    {" "}
                    Providing rapid services for buying items from pec market will
                    also be covered.{" "}
                  </p>
                  <p></p>
                </div>
                <div className="col-lg-6 py-3 wow fadeInRight">
                  <div className="img-fluid text-center">
                    <img src={moto} style={{width: "500px"}} alt =""/>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* .wrap */}
        </div>{" "}
        {/* .page-section */}
        {/* Blog */}
        <div className="page-section">
          <div className="container">
            <div className="text-center wow fadeInUp">
              <div className="subhead">Some glimpse of pec-market</div>
              <h2 className="title-section">Nimbu-Dew se lekar Pankaj bhaiya ke notes tak sb milega !!</h2>
              <div className="divider mx-auto" />
            </div>
            <div className="row my-5">

              <Shop
                name="Pankaj Graphics"
                img="https://cdn2.f-cdn.com/contestentries/69114/9533266/5336bde27bad7_thumb900.jpg"
                visit="Item_list"
                size='width: "280px"'

              />
              <Shop
                name="Rohit Graphics"
                img="https://2.bp.blogspot.com/-gUi44boQVKg/YIy-hPZLIJI/AAAAAAAAAtc/W8fSOHckx0syKWHzTHCfaQuDbXopnR4BgCK4BGAYYCw/s1600/20210501_080415.png "
                visit="Item_list"
                size='width: "280px"'

              />
              <Shop
                name="Food item shop 1"
                img="https://www.tarladalal.com/members/9306/big/big_aloo_parathas-8532.jpg"
                visit="Item_list"
                size='width: "280px"'

              />
            </div>
            <div className="col-12 mt-4 text-center wow fadeInUp">
              <Link
                to="pec_market"
                className="btn btn-primary"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </>

    </div>
  );
}
export default body;
