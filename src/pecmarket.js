import React from 'react';
import './assets/css/bootstrap.css';
import './assets/css/maicons.css';
import './assets/vendor/animate/animate.css';
import './assets/css/theme.css';
import Header from './html/header'; 
import Shop from "./Shops";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './html/footer';
function App() {
  return (
    <div>
      <div className="back-to-top"></div>
      <header>
        <Header/>
        <div className="container">
          <div className="page-banner">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-md-6">
                <nav aria-label="Breadcrumb">
                  <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">PecMarket</li>
                  </ul>
                </nav>
                <h1 className="text-center">PecMarket</h1>
              </div>

            </div>

          </div>
        </div>
      </header>

      <div className="page-section">
        <div className="container">
          <div className="row" style={{ display: "flex", alignItems: "center"}}>
            <div className="col-sm-8">
              <div className="form-search-blog" >
                <div className="input-group">
                  
                  {/* <div className="input-group-prepend">
                    <select  className="custom-select bg-light">
                      <option style={{ "webkitAppearance": "none" }}>All Categories</option>
                      <option value="travel">Stationary</option>
                      <option value="lifestyle">General Store</option>
                      <option value="healthy">Medicine</option>
                      <option value="food">Food</option>
                    </select>
                  </div> */}
                  {/* <input type="text"  placeholder="Enter keyword.."  /> */}
                </div>
              </div>
            </div>
            {/* <div className="col-sm-2 text-sm-right">
              <button style={{ marginBottom:"40px"}} className="btn btn-secondary">Search<span className="mai-filter"></span></button>
            </div> */}
          </div>

          <div className="row my-5">
            <Shop
              name="Pankaj Graphics"
              img="https://cdn2.f-cdn.com/contestentries/69114/9533266/5336bde27bad7_thumb900.jpg"
              visit="pankaj_Item_list"
              size='width: "280px"'

            />
            <Shop
              name="Rohit Graphics"
              img="https://2.bp.blogspot.com/-gUi44boQVKg/YIy-hPZLIJI/AAAAAAAAAtc/W8fSOHckx0syKWHzTHCfaQuDbXopnR4BgCK4BGAYYCw/s1600/20210501_080415.png "
              visit="rohit_item_list"
              size='width: "280px"'

            />
            <Shop
              name="Food item shop 1"
              img="https://www.tarladalal.com/members/9306/big/big_aloo_parathas-8532.jpg"
              visit="pankaj_Item_list"
              size='width: "280px"'

            />
            <Shop
              name="Food items shop 2"
              img="https://5.imimg.com/data5/VB/AV/HQ/SELLER-49520187/mountain-dew-cold-drink-500x500.jpg"
              visit="pankaj_Item_list"
              size='width: "280px"'

            />
            <Shop
              name="General store"
              img="https://media.istockphoto.com/photos/shopkeeper-at-a-local-food-shop-picture-id489432286"
              postdata="Open from 8am - 9pm"
              visit="pankaj_Item_list"
              size='width: "280px"'

            />
            <Shop
              name="Medicine Shop"
              img="https://us.123rf.com/450wm/iidniel/iidniel1910/iidniel191000143/131948996-asian-man-customer-or-buyer-of-phamacy-drug-store-in-discussion-of-the-medicine-property-effect-buyi.jpg?ver=6"
              postdata="Open from 8am - 9pm"
              visit="pankaj_Item_list"
              size='width: "280px"'

            />
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
      </div>

      <Footer/>
      <Helmet>
        <script type="text/javascript" src="./assets/js/jquery-3.5.1.min.js"/>

        <script type="text/javascript" src="./assets/js/bootstrap.bundle.min.js"/>

        <script type="text/javascript" src="./assets/vendor/wow/wow.min.js"/>

        <script type="text/javascript" src="./assets/js/theme.js"/>
      </Helmet>
    </div>
  );

}
export default App;
