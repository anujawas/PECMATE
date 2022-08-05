import React from "react";
function Signinfreelancer() {
    return (
        <div>
            <link href="../html/index.html">
                {" "}
                <div className="logo">
                    <span className="lo" id="logo1">
                        Pec
                    </span>
                    <span className="lo" id="logo2">
                        Mate
                    </span>
                </div>
            </link>
            <div className="background">
                <div className="shape" />
                <div className="shape" />
            </div>
            <form>
                <h3 style={{ textAlign: "left" }}>Login </h3>
                <h5>As Freelanceer</h5>
                <label htmlFor="username">Username</label>
                <input type="email" placeholder="Email or Phone" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                {/* <div class="form-check" >
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" style="font-size: 16px;" for="flexCheckDefault">Remember me</label><span style="font-size: 12px;" ><link href="#">Forgot password?</link></span>

  </div> */}
                <div className="form-check">
                    <span>
                        <input
                            type="checkbox"
                            name="check"
                            id="remember_me"
                            className="form-check-input"
                        />
                    </span>
                    <span style={{ margin: 1, fontSize: 16 }}> Remember me</span>
                    <span style={{ float: "right", fontSize: 16, marginLeft: 30 }}>
                        <link href>forgot password?</link>
                    </span>
                </div>
                <input
                    type="button"
                    id="login"
                    onclick="location.href = '#'"
                    defaultValue="Log In"
                />
                <div className="social">
                    <div className="go">
                        <i />
                        <span style={{ color: "#4285f4" }}>G</span>
                        <span style={{ color: "#ea4335" }}>o</span>
                        <span style={{ color: "#fbbc05" }}>o</span>
                        <span style={{ color: "#4285f4" }}>g</span>
                        <span style={{ color: "#34a853" }}>l</span>
                        <span style={{ color: "#ea4335" }}>e</span>
                    </div>
                    <div className="gb image">
                        <i className="fab fa-github"> GitHub</i>
                    </div>
                </div>
                <div
                    className="signupoption"
                    style={{ fontSize: 14, margin: 26, marginTop: 10 }}
                >
                    <link href="signup_freelancer1.html">Don't have an account?Sign up here</link>
                </div>
            </form>
        </div>

    );
}
export default Signinfreelancer;