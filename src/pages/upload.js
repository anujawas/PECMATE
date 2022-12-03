import React from "react";
import Footer from "./footer";
import Header from "./header";

function Upload(){
    return(
       
        <div>
           <Header/>
        <div className="container">
          <div
            className="row"
            style={{
          
              height: 650,
              width: "100%",
              marginTop: 100
            }}
          >
            <div className="col-md-5 mt-2" style={{ border: "2px solid grey", borderRadius:"10px"}}>
              <h1 style={{ textAlign: "center", marginTop: 100, fontSize: 50 }}>
                Select your work here
              </h1>
              <form className="form-inline">
                <div className="form-group mb-2"></div>
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="inputPassword2" className="sr-only">
                    <strong>Subject</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="type your subject here"
                  />
                </div>
              </form>
              <h4>Choose your work type</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Assignment
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Practical
                </label>
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Confirm
              </button>
            </div>
            <div
              className="col-md-6 offset-md-1 my-5  bg-gradient"
              style={{ border: "2px solid grey" }}
            >
              <h1 style={{ fontWeight: 400, textAlign: "center", paddingTop: "30%" }}>
                Choose your file here
              </h1>
              <form action="/action_page.php">
                <input
                  style={{ marginTop: 10, marginLeft: 150, }}
                  type="file"
                  id="myFile"
                  name="filename"
                />
                <input style={{ marginLeft: "40%",backgroundColor:"#6c55f9", color:"white" }} type="submit" />
                
              </form>
            </div>
            
          </div>
        </div>
        <Footer/>
      </div>
      
    );
}
export default Upload;