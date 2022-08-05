import React, { Component } from "react";

import "./assets/css/maicons.css"
import "./assets/css/bootstrap.css"
import "./assets/vendor/animate/animate.css"
import "./assets/css/theme.css"
import Item from './item';
import Header from "./html/header";
import Footer from "./html/footer";
class Particularshop extends Component {
  constructor(props) {
    super(props)
    this.state={}
    console.log(this.props.match.params.shopName);
  }
  render() {
      return (
        <div>
        <div className="back-to-top"></div>
        <header>
          <Header/>
        </header>
        <welcome style={{padding: "20px"}}>
          <div className="container" id="level" style={{ backgroundColor: "#f0ecf4", padding: "80px", borderRadius: "10px"}}>
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center" id="nameofowner">Welcome to {this.props.match.params.shopName} </h1>
              </div>
            </div>
          </div>
  
  
        </welcome>
  
        <div className="page-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <div action="https://google.com" className="form-search-blog">
                  <div className="input-group">
                    {/* <div className="input-group-prepend">
                      <select id="categories" className="custom-select bg-light">
                        <option style={{ "webkitAppearance": "none" }} >All Categories</option>
                        <option value="travel">Stationary items</option>
                        <option value="lifestyle">notes </option>
                      </select>
                    </div> */}
                    <input type="text" className="form-control" placeholder="Enter keyword.." />
                  </div>
                </div>
              </div>
              <div className="col-sm-2 text-sm-right" style={{marginTop: "-35px"}}>
                <button className="btn btn-secondary">Search<span className="mai-filter"></span></button>
              </div>
            </div>
  
  
            <div className="row my-5">
              <Item
                name="Maths-II notes by Anuj Awasthi"
                imgsrc="https://images.prismic.io/astar/NGI1MGIyMTEtMTNmYy00ZGUyLThlYmEtMjM3N2M4NzY2ZDhl_mathsintro.jpg?auto=compress,format&rect=0,0,1080,810&w=1080&h=810"
                rate="₹300"
              />
              <Item
                name="Data Structures notes by Gaurav Pant"
                imgsrc="https://image.slidesharecdn.com/datastructuresmynotes-180612132401/95/data-structures-notes-1-638.jpg?cb=1528809921"
                rate="₹400"
              />
              <Item
                name="Propulsion notes by Sahil Ahmed"
                imgsrc="https://inteng-storage.s3.amazonaws.com/img/iea/V0OyZDLgGQ/sizes/orion_resize_md.jpg"
                rate="₹450"
              />
              <Item
                name="Compass Box"
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuo8dQdDIyD7ew8AC5Zr6JfrNIoADSZ1h1A&usqp=CAU"
                rate="₹199"
              />
              <Item
                name="Mini Drafter"
                imgsrc="https://rukminim1.flixcart.com/image/416/416/jkzrc7k0/drafting-kit/q/x/p/mini-drafter-combo-isomars-original-imaf86ru7pxhexc6.jpeg?q=70"
                rate="₹300"
              />
              <Item
                name="Stapler"
                imgsrc="https://m.media-amazon.com/images/I/61PiyFveSWL._SL1492_.jpg"
                rate="₹79"
              />
  
            </div>
          </div>
        </div>
  
        <footer className="page-footer bg-image" style={{ backgroundImage: "url(../assets/img/world_pattern.svg)" }}>
          <Footer/>
        </footer>
  
      </div >
      )
  }
}

export default Particularshop;